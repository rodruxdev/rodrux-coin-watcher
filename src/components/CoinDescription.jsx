/* eslint-disable react/no-danger */
import React from 'react';
import '@styles/components/CoinDescription.css';

function CoinDescription({ children }) {
  return (
    <div className="description">
      <h4>Description</h4>
      <p
        className="description__text"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  );
}

export default CoinDescription;
