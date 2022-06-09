import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  actualInfo: [
    {
      exchange: 'Binance',
      pair: 'BTC/USD',
      data: { price: '$12345.67', volume: '$12345.67' },
    },
  ],
  exchangeOptions: [
    {
      exchange: 'Binance',
      pairs: [
        {
          pair: 'BTC/USD',
          data: { price: '$12345.67', volume: '$12345.67' },
        },
        {
          pair: 'BTC/USDT',
          data: { price: '$12345.67', volume: '$12345.67' },
        },
        {
          pair: 'BTC/USDC',
          data: { price: '$12345.67', volume: '$12345.67' },
        },
      ],
    },
  ],
};

const exchangesSlice = createSlice({
  name: 'exchanges',
  initialState,
  reducers: {
    updateExchange: (state, action) => {
      state.name = action.payload;
    },
  },
});

const { updateExchange } = exchangesSlice.actions;

export { updateExchange };

export default exchangesSlice.reducer;
