import React from 'react';
import '../styles/components/CoingeckoMention.css';

function CoingeckoMention() {
  return (
    <div className="mention">
      <p className="mention__text">Powered by</p>
      <div className="mention_logo">
        <img
          src="https://static.coingecko.com/s/coingecko-logo-63f24b60e1d2d526c141fee733ad2a39fbce7dabedd187a0dba95220396ce9a0.png"
          alt="CoinGecko Logo"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default CoingeckoMention;
