import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/components/CoinSelector.css';
import { useDispatch } from 'react-redux';
import { setConvertedCoin } from '@slices/convertorSlice';

function CoinSelector({ options, selectedValue }) {
  const dispatch = useDispatch();
  const changeConvertedCoinHandle = (event) => {
    const { value } = event.target;
    dispatch(setConvertedCoin(value));
  };
  return (
    <div className="coin-selector">
      <label htmlFor="coin" className="coin-selector__icon-container">
        <MdKeyboardArrowDown className="coin-selector__icon" />
      </label>
      {/* <div className="coin-selector__loading-container">
        <div className="coin-selector__loading  loading" />
      </div> */}
      <select
        name="Coin"
        id="coin"
        className="coin-selector__selector"
        value={selectedValue}
        aria-label="coin"
        onChange={changeConvertedCoinHandle}
      >
        {options.map((opt) => (
          <option value={opt} key={`coin-${opt}`}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CoinSelector;
