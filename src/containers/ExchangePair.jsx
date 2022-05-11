import React from 'react';
import '@styles/containers/ExchangePair.css';

function ExchangePair({ children }) {
  return (
    <div className="exchange-info">
      <div className="exchange-info__image">
        <img src="/" alt="Exchange Logo" />
      </div>
      {children}
    </div>
  );
}

export default ExchangePair;
