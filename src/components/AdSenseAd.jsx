import React, { useEffect } from 'react';

const AdSenseAd = ({ adClient, adSlot, adFormat = 'auto', fullWidthResponsive = 'true' }) => {
  useEffect(() => {
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdsbyGoogle push error:', e);
      }
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client={adClient}
         data-ad-slot={adSlot}
         data-ad-format={adFormat}
         data-full-width-responsive={fullWidthResponsive}></ins>
  );
};

export default AdSenseAd;
