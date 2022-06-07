import React from 'react';
import '@styles/components/CoinDescription.css';

function CoinDescription({ children }) {
  return (
    <div className="description">
      <h4>Description</h4>
      <p className="description__text">{children}</p>
    </div>
  );
}

export default CoinDescription;
