import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../styles/components/PairSelector.css';

function PairSelector() {
  return (
    <div className="pair">
      <select name="pair" id="pair" className="pair_selector">
        <option value="BTC/USDT">BTC/USDT</option>
      </select>
      <label htmlFor="coin" className="pair__icon-container">
        <MdKeyboardArrowDown className="pair__icon" />
      </label>
    </div>
  );
}

export default PairSelector;
