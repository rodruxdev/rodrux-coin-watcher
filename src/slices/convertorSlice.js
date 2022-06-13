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
    // TODO Define to change both at once or set one by one
    setPrice: (state, action) => {
      state.coinPrice = action.payload;
    },
    setConversion: (state, action) => {
      state.conversion = action.payload;
    },
  },
});

const { setCoinToConvert, setPrice, setConversion } = convertorSlice.actions;

export { setCoinToConvert, setPrice, setConversion };

export default convertorSlice.reducer;
