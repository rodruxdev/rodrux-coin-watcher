import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/components/PairSelector.css';

function PairSelector({ options }) {
  return (
    <div className="pair">
      <select
        name="pair"
        id="pair"
        className="pair_selector"
        aria-label="pair selector"
      >
        {options.map((opt) => (
          <option value={opt} key={`pair-${opt}`}>
            {opt}
          </option>
        ))}
      </select>
      <label htmlFor="coin" className="pair__icon-container">
        <MdKeyboardArrowDown className="pair__icon" />
      </label>
    </div>
  );
}

export default PairSelector;
