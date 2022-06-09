import React from 'react';
import '@styles/components/CoinTitle.css';

function CoinTitle({ title, image }) {
  return (
    <div className="coin-title">
      <div className="coin-title__image-container">
        <img src={image} alt={`${title} logo`} />
      </div>
      <p className="coin-title__text">{title}</p>
    </div>
  );
}

export default CoinTitle;
