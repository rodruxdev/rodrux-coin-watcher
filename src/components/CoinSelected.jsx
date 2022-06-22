import React from 'react';
import '@styles/components/CoinSelected.css';

// For loading add loading to classes in p tag
function CoinSelected({ coin }) {
  return (
    <div className="coin-selected">
      <p className="coin-selected__text">{coin || 'BTC'}</p>
    </div>
  );
}

export default CoinSelected;
