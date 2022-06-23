import React from 'react';
import LoadingPairInfo from '@components/LoadingPairInfo';

function LoadingCoinCard() {
  return (
    <div>
      <div className="coin-title">
        <div className="coin-title__image-container">
          <div />
        </div>
        <div />
      </div>
      <div className="exchange-info__container exchange-info__info">
        <LoadingPairInfo />
        <LoadingPairInfo />
      </div>
    </div>
  );
}

export default LoadingCoinCard;
