import React from 'react';
import '@styles/components/HeroText.css';

function HeroText() {
  return (
    <section className="hero-text">
      <h1>RODRUX COIN WATCHER</h1>
      <h2>Search your favorite cryptocoin and get its basic info.</h2>
      <p className="hero-text__paragraph">
        {`For each coin you can find basic market information, a convertor and information of the exchanges where the coin is available. You'll also see some related coins. All the information comes from Coingecko API.`}
      </p>
    </section>
  );
}

export default HeroText;
