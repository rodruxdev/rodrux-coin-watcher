import React from 'react';
import '@styles/containers/LoadingDescription.css';

function LoadingDescription() {
  return (
    <>
      <div className="loading-description__price-container">
        <div className="loading-description__container">
          <div className="loading-description__image loading" />
          <div className="loading-description__name loading" />
        </div>
        <div className="loading-description__price loading" />
      </div>
      <div className="loading-description__description-container">
        <h4>Description</h4>
        <div className="loading-description__description loading" />
      </div>
    </>
  );
}

export default LoadingDescription;
