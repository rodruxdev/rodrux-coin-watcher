/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoin from '@api/getCoin';
import createCoinInfo from '../lib/createCoinInfo';
import { setCoinToConvert } from './convertorSlice';

const initialState = {
  coinInfo: {},
};

export const fetchCoin = createAsyncThunk(
  'coin/fetchCoin',
  async (id, { dispatch }) => {
    try {
      const response = await getCoin(id);
      const coinInfo = createCoinInfo(response);
      dispatch(setCoin(coinInfo));
      dispatch(setCoinToConvert(response));
    } catch (err) {
      console.log(err, 'Error on fetching coin');
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
