import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [
    {
      title: 'Bitcoin(BTC)',
      price: '$12345.67',
      marketCap: '$12345,67',
      image: '/',
    },
  ],
};

const relatedCoinsSlice = createSlice({
  name: 'relatedCoins',
  initialState,
  reducers: {
    updateCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

const { updateCoins } = relatedCoinsSlice.actions;

export { updateCoins };

export default relatedCoinsSlice.reducer;
