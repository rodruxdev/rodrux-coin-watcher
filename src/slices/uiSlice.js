import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

const { updateSearch } = uiSlice.actions;

export { updateSearch };

export default uiSlice.reducer;
