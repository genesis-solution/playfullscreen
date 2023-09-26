import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

import {nip19, relayInit} from 'nostr-tools';
import {throttle} from 'throttle-debounce';
import {ensurePlural} from 'hurdak/lib/hurdak';
import {pluck, is} from 'ramda'

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

const NPubKey = "npub1nstrcu63lzpjkz94djajuz2evrgu2psd66cwgc0gz0c0qazezx0q9urg5l";
const toHex = (data) => {
  try {
    return nip19.decode(data).data
  } catch (e) {
    return null
  }
}

let pubkey = toHex(NPubKey);
// const relays = sampleRelays(getPubkeyWriteRelays(pubkey));
const relays = [{url: "wss://relay.damus.io", score: 1}, {url: "wss://nostr-pub.wellorder.net", score: 1}];
const filter = {kind: [1], authors: [pubkey]};

// Utils
const createFilterId = filters =>
  [Math.random().toString().slice(2, 6), filters.map(describeFilter).join(':')].join('-')

const describeFilter = ({kinds = [], ...filter}) => {
  const parts = []

  parts.push(kinds.join(','))

  for (const [key, value] of Object.entries(filter)) {
    if (is(Array, value)) {
      parts.push(`${key}[${value.length}]`)
    } else {
      parts.push(key)
    }
  }

  return '(' + parts.join(',') + ')'
}

const subscribe = async (
  {relays, filter, onEvent, onEose, onError}
) => {
  filter = ensurePlural(filter);
  const id = createFilterId(filter);
  const now = Date.now();
  const seen = new Set();
  const eose = new Set();

  let active = true;

  if (relays.length === 0) {
    console.log(`Attempted to start subscription ${id} with zero relays`, filter);
  } else {
    console.log(`Starting subscription ${id} with ${relays.length} relays`, filter, relays);
  }

  if (relays.length !== new Set(pluck('url', relays)).size) {
    console.log(`Subscribed to non-unique relays`, relays);
  }

  const isRelay = url => (
    typeof url === 'string'
    // It should have the protocol included
    && url.match(/^wss?:\/\/.+/)
  );

  const normalizeRelayUrl = url => url.replace(/\/+$/, '').toLowerCase().trim();
  const connections = {};

  const CONNECTION_STATUS = {
  NEW: 'new',
  ERROR: 'error',
  PENDING: 'pending',
  CLOSED: 'closed',
  READY: 'ready',
}

class Connection {
    constructor(url) {
    this.promise = null
    this.nostr = relayInit(url)
    this.status = 'new'
    this.stats = {
      timeouts: 0,
      subsCount: 0,
      eoseCount: 0,
      eoseTimer: 0,
      eventsCount: 0,
      activeSubsCount: 0,
    }

    connections[url] = this
  }
  hasRecentError() {
    return (
      this.status === CONNECTION_STATUS.ERROR
      && Date.now() - this.lastConnectionAttempt < 60_000
    )
  }
  async connect() {
    const shouldConnect = (
      this.status === CONNECTION_STATUS.NEW
      || (
        this.status === CONNECTION_STATUS.ERROR
        && Date.now() - this.lastConnectionAttempt > 60_000
      )
    )

    if (shouldConnect) {
      this.status = CONNECTION_STATUS.PENDING
      this.promise = this.nostr.connect()

      this.nostr.on('connect', () => {
        this.status = CONNECTION_STATUS.READY
      })

      this.nostr.on('error', () => {
        this.status = CONNECTION_STATUS.ERROR
      })

      this.nostr.on('disconnect', () => {
        this.status = CONNECTION_STATUS.CLOSED
      })
    }

    this.lastConnectionAttempt = Date.now()

    try {
      await this.promise
    } catch (e) {
      // This is already handled in the on error handler above
    }

    return this
  }
  getQuality() {
    if (this.status === CONNECTION_STATUS.ERROR) {
      return [0, "Failed to connect"]
    }

    const {timeouts, subsCount, eoseTimer, eoseCount} = this.stats
    const timeoutRate = timeouts > 0 ? timeouts / subsCount : null
    const eoseQuality = eoseCount > 0 ? Math.max(1, 500 / (eoseTimer / eoseCount)) : null

    if (timeoutRate && timeoutRate > 0.5) {
      return [1 - timeoutRate, "Slow connection"]
    }

    if (eoseQuality && eoseQuality < 0.7) {
      return [eoseQuality, "Slow connection"]
    }

    if (eoseQuality) {
      return [eoseQuality, "Connected"]
    }

    if ([CONNECTION_STATUS.NEW, CONNECTION_STATUS.PENDING].includes(this.status)) {
      return [0.5, "Trying to connect"]
    }

    if (this.status === CONNECTION_STATUS.CLOSED) {
      return [0.5, "Disconnected"]
    }

    if (this.status === CONNECTION_STATUS.READY) {
      return [1, "Connected"]
    }
  }
}

  const connect = url => {
    if (!isRelay(url)) {
      console.log(`Invalid relay url ${url}`)
    }
  
    if (url !== normalizeRelayUrl(url)) {
      console.log(`Received non-normalized relay url ${url}`)
    }
  
    if (!connections[url]) {
      connections[url] = new Connection(url)
    }
  
    return connections[url].connect()
  }

  const promises = relays.map(async relay => {
    const conn = await connect(relay.url);

    if (conn.status !== 'ready') {
      if (onError) {
        onError(relay.url);
      }

      return;
    }

    const sub = conn.nostr.sub(filter, {
      id,
      alreadyHaveEvent: (id) => {
        conn.stats.eventsCount += 1;
        let has = false;
        if (seen.has(id)) has = true;
        seen.add(id);
        return has;
      }
    });

    sub.on('event', e => {
      // Normalize events here, annotate with relay url
      onEvent({...e, seen_on: relay.url, content: e.content || ''});
    });

    sub.on('eose', () => {
      if (onEose) {
        onEose(conn.nostr.url);
      }

      // Keep track of relay timing stats, but only for the first eose we get
      if (!eose.has(conn.nostr.url)) {
        eose.add(conn.nostr.url);

        conn.stats.eoseCount += 1;
        conn.stats.eoseTimer += Date.now() - now;
      }
    });

    conn.stats.subsCount += 1;
    conn.stats.activeSubsCount += 1;

    if (conn.stats.activeSubsCount > 10) {
      console.log(`Relay ${conn.nostr.url} has >10 active subscriptions`);
    }

    return Object.assign(sub, {conn});
  });
};

const batch = (t, f) => {
  const xs = []
  const cb = throttle(t, () => f(xs.splice(0)))

  return x => {
    xs.push(x)
    cb()
  }
}

// const subPromise = subscribe({
//   relays,
//   filter,
//   onEvent: batch(500, chunk => {
//     setLoading(true);
//     setFeeds(prevFeed => [...prevFeed, ...chunk]);
//     setLoading(false);
//   }),
// });

useEffect(() => {
  setLoading(true);
  setFeeds([]);
  setPage(1);
  const subPromise = subscribe({
    relays,
    filter,
    onEvent: batch(500, chunk => {
      let newArr = [];
      chunk.map(item => {
        if(item.kind == 1)
          newArr.push(item)
      })
      setFeeds(prevFeeds => [...prevFeeds, ...newArr]);
      setLoading(false);
    }),
  });
  return () => {
    subPromise.then(sub => sub.unsubscribe());
  };
}, []);

const handleScroll = throttle(1000, () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageEndPosition = document.body.offsetHeight;
  if (scrollPosition >= pageEndPosition) {
    setPage(prevPage => prevPage + 1);
  }
});

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const feedsToDisplay = feeds.slice(0, page * 10);

// const sub = subPromise;
// console.log(sub);

    return(
    <>
       <main id="main" className="site-main">
            <Container>
                <Row>
                    <Col lg="12" sm="12">
                    {loading && <Spinner animation="border" />}
                    {!loading && feedsToDisplay.map((data) => (
                      <Card key={`${data.id}`} bg="dark" text="white" className="mb-2">
                        <Card.Header>{new Date(data.created_at * 1000).toDateString()}</Card.Header>
                        <Card.Body>
                          <Card.Title> {data.id} </Card.Title>
                          <Card.Text>
                            {data.content}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                    {!loading && feedsToDisplay.length === 0 && <p>No feeds to display</p>}
                    </Col>
                </Row>
            </Container>
       </main>
    </>
    )
}

export default Feed