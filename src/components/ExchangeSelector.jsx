import React from 'react';
import '../styles/components/ExchangeSelector.css';

function ExchangeSelector() {
  return (
    <select
      name="exchange"
      id="exchange"
      className="exchange blue-box"
      aria-label="exchange selector"
    >
      <option value="Binance">Binance</option>
    </select>
  );
}

export default ExchangeSelector;
