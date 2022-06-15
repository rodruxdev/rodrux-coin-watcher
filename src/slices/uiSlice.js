import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

const { setSearch } = uiSlice.actions;

export { setSearch };

export default uiSlice.reducer;
