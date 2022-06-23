import React from 'react';
import '@styles/components/CoinSelected.css';
import { useSelector } from 'react-redux';

function CoinSelected({ coin }) {
  const loading = useSelector((state) => state.ui.loadingCoinInfo);
  return (
    <div className="coin-selected">
      <p className={`coin-selected__text ${loading ? 'loading' : ''}`}>
        {coin || 'BTC'}
      </p>
    </div>
  );
}

export default CoinSelected;
