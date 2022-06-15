/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCategoriesList from '../api/getCategoriesList';
import getCoins from '../api/getCoins';
import createRelatedCoins from '../lib/createRelatedCoins';

const initialState = {
  coins: [],
};

export const fetchRelatedCoins = createAsyncThunk(
  'relatedCoins/fetchRelatedCoins',
  async (categories, { dispatch }) => {
    try {
      const limit = 6;
      const allCategories = await getCategoriesList();
      const category = allCategories.find(
        (item) => item.name === categories[0]
      );
      const response = await getCoins(limit, {
        category: category.category_id,
      });
      const relatedCoins = createRelatedCoins(response);
      dispatch(setRelatedCoins(relatedCoins));
    } catch (err) {
      console.log(err, 'Error on fetching coin');
    }
  }
);

const relatedCoinsSlice = createSlice({
  name: 'relatedCoins',
  initialState,
  reducers: {
    setRelatedCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

const { setRelatedCoins } = relatedCoinsSlice.actions;

export { setRelatedCoins };

export default relatedCoinsSlice.reducer;
