import React from 'react';
import '@styles/components/CoinTitle.css';

function CoinTitle({ title, image }) {
  return (
    <div className="coin-title">
      <div className="coin-title__image-container">
        <img src={image} alt={`${title} logo`} />
        {/* <div className="coin-title__image-loading loading" /> */}
      </div>
      <p className="coin-title__text">{title}</p>
      {/* <div className="coin-title__text-loading loading" /> */}
    </div>
  );
}

export default CoinTitle;
