import React from 'react';
import '@styles/components/PairInfo.css';

function PairInfo({ title, children }) {
  return (
    <div className="pair-info">
      <p className="pair-info__title">{title}</p>
      <p className="pair-info__info">{children}</p>
    </div>
  );
}

export default PairInfo;
