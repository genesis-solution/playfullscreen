import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.dataWebsiteOwnerPubkey = "pubkey"
    script.dataChatType = "GLOBAL"
    script.dataChatTags = "nostrica,bitcoin"
    script.dataRelays = "wss://relay.f7z.io,wss://nos.lol,wss://relay.nostr.info,wss://nostr-pub.wellorder.net,wss://relay.current.fyi,wss://relay.nostr.band"


    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;