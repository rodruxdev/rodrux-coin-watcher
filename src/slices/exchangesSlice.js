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
    {
      exchangeId: 'binance',
      exchange: 'Binance',
      pair: 'BTC/USD',
      data: { price: '$12345.6', volume: '$12345.6' },
    },
    {
      exchangeId: 'binance',
      exchange: 'Binance',
      pair: 'BTC/USD',
      data: { price: '$12345', volume: '$12345' },
    },
  ],
  exchangeOptions: {},
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
