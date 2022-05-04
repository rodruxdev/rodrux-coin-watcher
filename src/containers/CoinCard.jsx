import React from 'react';
import '../styles/containers/CoinCard.css';

function CoinCard({ children }) {
  return <div className="card">{children}</div>;
}

export default CoinCard;
