import React from 'react';
import '@styles/components/CoinPrice.css';

function CoinPrice({ title, image, children }) {
  return (
    <div className="price">
      <div className="price__coin-container">
        <div className="price__image-container">
          <img src={image} alt={`${title} logo`} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="price__coin-container">
        <p className="price__price">{children}</p>
      </div>
    </div>
  );
}

export default CoinPrice;
