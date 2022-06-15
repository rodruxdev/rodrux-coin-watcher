/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoins from '@api/getCoins';
import searchCoins from '@api/searchCoins';
import createCoinsList from '@lib/createCoinsList';
import getSearchedCoinsIds from '@lib/getSearchedCoinsIds';

const initialState = {
  coins: [],
};

export const fetchCoins = createAsyncThunk(
  'table/fetchCoins',
  async (searchIds, { dispatch }) => {
    try {
      const limit = 20;
      const response = await getCoins(limit, { searchIds });
      const coinsList = createCoinsList(response);
      dispatch(setCoins(coinsList));
    } catch (err) {
      console.log(err, 'Error on fetching coins');
    }
  }
);

export const fetchSearchCoins = createAsyncThunk(
  'table/fetchSearchCoins',
  async (search, { dispatch }) => {
    try {
      const response = await searchCoins(search);
      const searchIds = getSearchedCoinsIds(response);
      dispatch(fetchCoins(searchIds));
    } catch (err) {
      console.log(err, 'Error on fetching search');
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
