import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/components/CoinSelector.css';

function CoinSelector() {
  return (
    <div className="coin-selector">
      <label htmlFor="coin" className="coin-selector__icon-container">
        <MdKeyboardArrowDown className="coin-selector__icon" />
      </label>
      <select
        name="Coin"
        id="coin"
        className="coin-selector__selector"
        aria-label="coin"
      >
        <option value="BTC">BTC</option>
      </select>
    </div>
  );
}

export default CoinSelector;
