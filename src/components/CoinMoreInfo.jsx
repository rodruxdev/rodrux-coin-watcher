import React from 'react';
import '@styles/components/CoinMoreInfo.css';

function CoinMoreInfo({ title, children }) {
  return (
    <div className="info">
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
}

export default CoinMoreInfo;
