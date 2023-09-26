import { useEffect } from 'react';
import {nip19} from 'nostr-tools'

const useScript = url => {
  useEffect(() => {
    const NPubKey = "npub1nstrcu63lzpjkz94djajuz2evrgu2psd66cwgc0gz0c0qazezx0q9urg5l";
    const toHex = (data) => {
    try {
    return nip19.decode(data).data
    } catch (e) {
    return null
    }
    }

    let pubkey = toHex(NPubKey);

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.setAttribute('data-website-owner-pubkey', {pubkey});
    script.setAttribute("data-chat-type", 'Global');
    script.setAttribute('data-chat-tag', "nostrica,bitcoin");
    // script.dataRelays=["wss://relay.f7z.io"];
    script.setAttribute('data-relays', "wss://relay.f7z.io,wss://nos.lol,wss://relay.nostr.info,wss://nostr-pub.wellorder.net,wss://relay.current.fyi,wss://relay.nostr.band");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;