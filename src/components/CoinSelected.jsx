import React from 'react';
import '@styles/components/CoinSelected.css';

function CoinSelected({ coin }) {
  return (
    <div className="coin-selected">
      <p className="coin-selected__text">{coin}</p>
    </div>
  );
}

export default CoinSelected;
