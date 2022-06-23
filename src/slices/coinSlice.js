/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoin from '@api/getCoin';
import createCoinInfo from '../lib/createCoinInfo';
import { setCoinToConvert } from './convertorSlice';
import { fetchExchangeImages, setExchangeOptions } from './exchangesSlice';
import { fetchRelatedCoins } from './relatedCoinsSlice';
import {
  setError,
  startLoadingCoin,
  toggleLoadingCoinInfo,
  toggleLoadingExchanges,
  toggleLoadingRelatedCoins,
} from './uiSlice';

const initialState = {
  coinInfo: {},
};

export const fetchCoin = createAsyncThunk(
  'coin/fetchCoin',
  async (id, { dispatch }) => {
    try {
      dispatch(startLoadingCoin());
      const response = await getCoin(id);
      const coinInfo = createCoinInfo(response);
      dispatch(setCoin(coinInfo));
      dispatch(setCoinToConvert(response));
      dispatch(toggleLoadingCoinInfo());
      dispatch(setExchangeOptions(response.tickers));
      dispatch(fetchExchangeImages());
      dispatch(toggleLoadingExchanges());
      dispatch(fetchRelatedCoins(response.categories));
      dispatch(toggleLoadingRelatedCoins());
    } catch (err) {
      const error = {
        message: 'Error fetching coin data',
        error: err,
        section: 'coin-info',
      };
      dispatch(setError(error));
    }
  }
);

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.coinInfo = action.payload;
    },
  },
});

const { setCoin } = coinSlice.actions;

export { setCoin };

export default coinSlice.reducer;
