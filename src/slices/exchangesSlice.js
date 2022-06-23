/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createActualExchanges from '../lib/createActualExchanges';
import createExchangeOptions from '../lib/createExchangeOptions';
import { setError } from './uiSlice';

const initialState = {
  actualInfo: [],
  exchangeOptions: {},
};

export const fetchExchangeImages = createAsyncThunk(
  'exchanges/fetchExchangeImages',
  async (_, { dispatch, getState }) => {
    try {
      const { exchangeOptions } = getState().exchanges;
      const response = await createActualExchanges(exchangeOptions);
      dispatch(setActualExchanges(response));
    } catch (err) {
      const error = {
        message: 'Error fetching exchange data',
        error: err,
        section: 'exchange',
      };
      dispatch(setError(error));
    }
  }
);

const exchangesSlice = createSlice({
  name: 'exchanges',
  initialState,
  reducers: {
    setActualExchanges: (state, action) => {
      state.actualInfo = action.payload;
    },
    setExchangeImages: (state, action) => {
      const images = action.payload;
      images.forEach((image, index) => {
        state.actualInfo[index].image = image;
      });
    },
    setExchangeOptions: (state, action) => {
      const options = createExchangeOptions(action.payload);
      state.exchangeOptions = options;
    },
    setExchange: (state, action) => {
      const { newExchange, index } = action.payload;
      state.actualInfo[index] = newExchange;
    },
    setPair: (state, action) => {
      const { newPair, index } = action.payload;
      state.actualInfo[index].pair = newPair.pair;
      state.actualInfo[index].data = newPair.data;
    },
  },
});

const {
  setActualExchanges,
  setExchangeImages,
  setExchangeOptions,
  setExchange,
  setPair,
} = exchangesSlice.actions;

export {
  setActualExchanges,
  setExchangeImages,
  setExchangeOptions,
  setExchange,
  setPair,
};

export default exchangesSlice.reducer;
