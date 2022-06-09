/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoins from '../api/getCoins';

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

export const fetchCoins = createAsyncThunk(
  'table/fetchCoins',
  async (_, { dispatch }) => {
    try {
      const response = await getCoins();
      const coinsList = response;
      console.log(coinsList);
      // dispatch(setCoins(coinsList));
    } catch (err) {
      console.log(err, 'Error on fetching coins');
    }
  }
);

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    updateCoins: (state, action) => {
      state.coins[0].name = action.payload;
    },
  },
});

const { setCoins, updateCoins } = tableSlice.actions;

export { setCoins, updateCoins };

export default tableSlice.reducer;
