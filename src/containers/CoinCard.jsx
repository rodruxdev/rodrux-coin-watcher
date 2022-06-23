import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/containers/CoinCard.css';

function CoinCard({ coinId, children }) {
  // Bring here the logic to scroll top
  return (
    <div className="card">
      <Link to={`/coin/${coinId}`} className="card__link">
        {children}
      </Link>
    </div>
  );
}

export default CoinCard;
