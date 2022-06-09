import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Bitcoin',
  ticker: 'BTC',
  title: 'Bitcoin(BTC)',
  price: 12345.67,
  priceTitle: '$12345.67 USD',
  image: '/',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odio eos. Eveniet hic fugiat deleniti deserunt optio cum mollitia accusantium quidem, nam libero et, voluptatum praesentium nisi velit obcaecati totam?',
  moreInfo: {
    roi: '$12345.67',
    ath: '$12345.67',
    atl: '$12345.67',
    athPercentage: '$12345.67',
    atlPercentage: '$12345.67',
    marketCap: '$12345.67',
    volume: '$12345.67',
    highDay: '$12345.67',
    lowDay: '$12345.67',
    priceChange: {
      hour: '$12345.67',
      day: '$12345.67',
      week: '$12345.67',
    },
    coinQuantity: '$12345.67',
  },
  exchangesInfo: {
    Binance: [
      {
        pair: 'BTC/USDT',
        price: '$12345.67',
        marketCap: '$1234567.89',
      },
    ],
  },
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    updateCoin: (state, action) => {
      state.name = action.payload;
    },
  },
});

const { updateCoin } = coinSlice.actions;

export { updateCoin };

export default coinSlice.reducer;
