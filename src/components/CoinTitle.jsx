import React from 'react';
import '../styles/components/CoinTitle.css';

function CoinTitle() {
  return (
    <div className="coin-title">
      <div className="coin-title__image-container">
        <img src="/" alt="Exchange Logo" />
      </div>
      <p className="coin-title__text">Bitcoin(BTC)</p>
    </div>
  );
}

export default CoinTitle;
