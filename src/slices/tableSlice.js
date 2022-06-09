/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoins from '../api/getCoins';
import createCoinsList from '../lib/createCoinsList';

const initialState = {
  coins: [],
};

export const fetchCoins = createAsyncThunk(
  'table/fetchCoins',
  async (_, { dispatch }) => {
    try {
      const limit = 20;
      const response = await getCoins(limit);
      const coinsList = createCoinsList(response);
      dispatch(setCoins(coinsList));
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
