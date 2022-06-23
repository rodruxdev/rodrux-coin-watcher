import React from 'react';
import '@styles/components/CoinTitle.css';
import { useSelector } from 'react-redux';

function CoinTitle({ title, image }) {
  const loading = useSelector((state) => state.ui.loadingRelatedCoins);

  return (
    <div className="coin-title">
      <div className="coin-title__image-container">
        {loading ? (
          <div className="coin-title__image-loading loading" />
        ) : (
          <img src={image} alt={`${title} logo`} />
        )}
      </div>
      {loading ? (
        <div className="coin-title__text-loading loading" />
      ) : (
        <p className="coin-title__text">{title}</p>
      )}
    </div>
  );
}

export default CoinTitle;
