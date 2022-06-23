import React from 'react';
import '@styles/components/LoadingPairInfo.css';

function LoadingPairInfo() {
  return (
    <div className="loading-pair-info">
      <div className="loading-pair-info__title-container">
        <div className="loading-pair-info__title loading" />
      </div>
      <div className="loading-pair-info__info-container">
        <div className="loading-pair-info__info loading" />
      </div>
    </div>
  );
}

export default LoadingPairInfo;
