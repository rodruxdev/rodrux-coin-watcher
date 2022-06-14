import { createSlice } from '@reduxjs/toolkit';
import createCoinConversion from '../lib/createCoinConversion';

const initialState = {
  coinConversion: {},
};

const convertorSlice = createSlice({
  name: 'convertor',
  initialState,
  reducers: {
    setCoinToConvert: (state, action) => {
      const coinConversion = createCoinConversion(action.payload);
      state.coinConversion = coinConversion;
    },
    setPriceConversion: (state, action) => {
      const { newCoinPrice, newConversion } = action.payload;
      state.coinConversion.coinPrice = newCoinPrice;
      state.coinConversion.conversion = newConversion;
    },
  },
});

const { setCoinToConvert, setPriceConversion } = convertorSlice.actions;

export { setCoinToConvert, setPriceConversion };

export default convertorSlice.reducer;
