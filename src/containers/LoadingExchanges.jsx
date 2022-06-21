import React from 'react';
import LoadingPairInfo from '../components/LoadingPairInfo';

function LoadingExchanges() {
  return (
    <div className="exchange-info">
      <div className="exchange-info__image">
        <div />
      </div>
      <div className="exchange-info__container">
        <div />
        <div />
      </div>
      <div className="exchange-info__container exchange-info__info">
        <LoadingPairInfo />
        <LoadingPairInfo />
      </div>
    </div>
  );
}

export default LoadingExchanges;
