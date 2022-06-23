import React from 'react';
import '@styles/containers/RelatedCoins.css';

function RelatedCoins({ children }) {
  return (
    <section className="related-coins">
      <h4>Related Coins</h4>
      <div className="related-coins__carrousel-container">
        <div className="related-coins__carrousel">{children}</div>
      </div>
    </section>
  );
}

export default RelatedCoins;
