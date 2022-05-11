import React from 'react';
import '@styles/components/CoinPrice.css';

function CoinPrice() {
  return (
    <div className="price">
      <div className="price__coin-container">
        <div className="price__image-container">
          <img src="/" alt="Bitcoin logo" />
        </div>
        <h3>Bitcoin (BTC)</h3>
      </div>
      <div className="price__coin-container">
        <p className="price__price">$0.00002452 USD</p>
      </div>
    </div>
  );
}

export default CoinPrice;
