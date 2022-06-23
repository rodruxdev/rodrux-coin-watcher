/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoins from '@api/getCoins';
import searchCoins from '@api/searchCoins';
import createCoinsList from '@lib/createCoinsList';
import getSearchedCoinsIds from '@lib/getSearchedCoinsIds';
import { setError, toggleLoadingTable } from './uiSlice';

const initialState = {
  coins: [],
};

export const fetchCoins = createAsyncThunk(
  'table/fetchCoins',
  async (searchIds, { dispatch }) => {
    try {
      dispatch(toggleLoadingTable());
      const limit = 20;
      const response = await getCoins(limit, { searchIds });
      const coinsList = createCoinsList(response);
      dispatch(setCoins(coinsList));
    } catch (err) {
      const error = {
        message: 'Error fetching coins data',
        error: err,
        section: 'table',
      };
      dispatch(setError(error));
    }
    dispatch(toggleLoadingTable());
  }
);

export const fetchSearchCoins = createAsyncThunk(
  'table/fetchSearchCoins',
  async (search, { dispatch }) => {
    try {
      dispatch(toggleLoadingTable());
      const response = await searchCoins(search);
      const searchIds = getSearchedCoinsIds(response);
      dispatch(fetchCoins(searchIds));
    } catch (err) {
      const error = {
        message: 'Error fetching search of coins',
        error: err,
        section: 'table',
      };
      dispatch(setError(error));
    }
    dispatch(toggleLoadingTable());
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
