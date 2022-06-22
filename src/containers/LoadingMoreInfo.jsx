/* eslint-disable react/no-array-index-key */
import React from 'react';
import '@styles/containers/LoadingMoreInfo.css';

function LoadingMoreInfo() {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div key={`loading-info-${index}`} className="loading-info">
          <div className="loading-info__text loading" />
          <div className="loading-info__text loading" />
        </div>
      ))}
    </>
  );
}

export default LoadingMoreInfo;
