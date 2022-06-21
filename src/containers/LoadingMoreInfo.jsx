/* eslint-disable react/no-array-index-key */
import React from 'react';

function LoadingMoreInfo() {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div key={`loading-info-${index}`}>
          <div />
          <div />
        </div>
      ))}
    </>
  );
}

export default LoadingMoreInfo;
