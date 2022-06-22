import React, { useEffect } from 'react';
import '@styles/components/CoinConversion.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceConversion } from '@slices/convertorSlice';
import convertCoins from '../lib/convertCoin';

function CoinConversion({ type }) {
  const conversionState = useSelector(
    (state) => state.convertor.coinConversion
  );
  const value =
    type === 'main' ? conversionState?.coinPrice : conversionState?.conversion;
  const dispatch = useDispatch();

  const conversionHandler = (event) => {
    const valueInput = event.target.value;
    const payload = convertCoins(valueInput, conversionState, type);
    dispatch(setPriceConversion(payload));
  };
  useEffect(() => {
    if (value && Object.keys(conversionState).length !== 0 && type === 'main') {
      const payload = convertCoins(value, conversionState, type);
      dispatch(setPriceConversion(payload));
    }
  }, [conversionState?.convertedCoin]);
  return (
    <div className="input-convertor">
      {/* <div className="input-convertor__loading-container">
        <div className="input-convertor__loading  loading" />
      </div> */}
      <input
        type="number"
        min="0"
        value={value ?? ''}
        className="input-convertor__input"
        aria-label="coin convertor"
        onChange={conversionHandler}
      />
    </div>
  );
}

export default CoinConversion;
