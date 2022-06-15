import React from 'react';
import '@styles/components/ExchangeSelector.css';
import { useDispatch, useSelector } from 'react-redux';
import { setExchange } from '@slices/exchangesSlice';
import changeExchange from '@lib/changeExchange';

function ExchangeSelector({ options, selectedExchange, index }) {
  const exchangeOptions = useSelector(
    (state) => state.exchanges.exchangeOptions
  );
  const dispatch = useDispatch();
  const changeExchangeHandle = async (event) => {
    const { value } = event.target;
    const newExchange = await changeExchange(exchangeOptions, value);
    dispatch(setExchange({ newExchange, index }));
  };

  return (
    <select
      name="exchange"
      id="exchange"
      value={selectedExchange}
      className="exchange blue-box"
      aria-label="exchange selector"
      onChange={changeExchangeHandle}
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
