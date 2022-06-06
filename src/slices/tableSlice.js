import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      price: 0.00002452,
      images: ['/', '/', '/'],
      percentageChanges: [1234.5, -2.5, 1.7],
      marketCap: '772,504,060,812',
      ath: '772,504',
      athPercentage: 1234.5,
      coinId: 1,
    },
  ],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateCoins: (state, action) => {
      state.coins = state.coins.map((coin) => ({
        ...coin,
        name: action.payload,
      }));
    },
  },
});

const { updateCoins } = tableSlice.actions;

export { updateCoins };

export default tableSlice.reducer;
