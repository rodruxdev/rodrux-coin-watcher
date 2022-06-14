/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createActualExchanges from '../lib/createActualExchanges';
import createExchangeOptions from '../lib/createExchangeOptions';

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
      console.log(err, 'Error on fetching coin');
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
  },
});

const { setActualExchanges, setExchangeImages, setExchangeOptions } =
  exchangesSlice.actions;

export { setActualExchanges, setExchangeImages, setExchangeOptions };

export default exchangesSlice.reducer;
