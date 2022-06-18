import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/components/PairSelector.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPair } from '@slices/exchangesSlice';

function PairSelector({ options, selectedPair, index }) {
  const exchangeId = useSelector(
    (state) => state.exchanges.actualInfo[index]?.exchangeId
  );
  const pairs = useSelector(
    (state) => state.exchanges.exchangeOptions[exchangeId]?.pairs
  );
  const dispatch = useDispatch();
  const pairChangeHandle = (event) => {
    const { value } = event.target;
    if (pairs) {
      const newPair = pairs.find((item) => item.pair === value);
      dispatch(setPair({ newPair, index }));
    }
  };
  return (
    <div className="pair">
      <label htmlFor="coin" className="pair__icon-container">
        <MdKeyboardArrowDown className="pair__icon" />
      </label>
      <select
        name="pair"
        id="pair"
        className="pair_selector"
        aria-label="pair selector"
        value={selectedPair}
        onChange={pairChangeHandle}
      >
        {options.map((opt) => (
          <option value={opt} key={`pair-${opt}`}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PairSelector;
