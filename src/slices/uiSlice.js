import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  loadingTable: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
    toggleTableLoading: (state) => {
      state.loadingTable = !state.loadingTable;
    },
  },
});

const { setSearch, toggleTableLoading } = uiSlice.actions;

export { setSearch, toggleTableLoading };

export default uiSlice.reducer;
