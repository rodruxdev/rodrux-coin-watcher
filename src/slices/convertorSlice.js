import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coin: 'BTC',
  coinPrice: 1,
  conversion: 12345.67,
  conversionOptions: [
    {
      coin: 'USD',
      conversionRatio: 12345.67,
    },
  ],
};

const convertorSlice = createSlice({
  name: 'convertor',
  initialState,
  reducers: {
    setCoin: (state, action) => {
      const { newCoin, newConversionOptions } = action.payload;
      state.coin = newCoin;
      state.conversionOptions = newConversionOptions;
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

const { setCoin, setPrice, setConversion } = convertorSlice.actions;

export { setCoin, setPrice, setConversion };

export default convertorSlice.reducer;
