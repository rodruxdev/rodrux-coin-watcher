import { createSlice } from '@reduxjs/toolkit';
import createExchangeOptions from '../lib/createExchangeOptions';

const initialState = {
  actualInfo: [
    {
      exchangeId: 'binance',
      exchange: 'Binance',
      pair: 'BTC/USD',
      data: { price: '$12345.67', volume: '$12345.67' },
    },
  ],
  exchangeOptions: {
    binance: {
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
  },
};

const exchangesSlice = createSlice({
  name: 'exchanges',
  initialState,
  reducers: {
    updateExchange: (state, action) => {
      state.name = action.payload;
    },
    setExchangeOptions: (state, action) => {
      const options = createExchangeOptions(action.payload);
      state.exchangeOptions = options;
    },
  },
});

const { updateExchange, setExchangeOptions } = exchangesSlice.actions;

export { updateExchange, setExchangeOptions };

export default exchangesSlice.reducer;
