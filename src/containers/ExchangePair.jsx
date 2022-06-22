import React from 'react';
import '@styles/containers/ExchangePair.css';

function ExchangePair({ image, exchange, children }) {
  return (
    <div className="exchange-info">
      <div className="exchange-info__image">
        {/* <div className="exchange-info__image-loading loading" /> */}
        <img src={image} alt={`${exchange} logo`} />
      </div>
      {children}
    </div>
  );
}

export default ExchangePair;
