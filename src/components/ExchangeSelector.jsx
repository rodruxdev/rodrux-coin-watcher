import React from 'react';
import '@styles/components/ExchangeSelector.css';

function ExchangeSelector({ options }) {
  return (
    <select
      name="exchange"
      id="exchange"
      className="exchange blue-box"
      aria-label="exchange selector"
    >
      {options.map((opt) => (
        <option value={opt} key={`exchange-${opt}`}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default ExchangeSelector;
