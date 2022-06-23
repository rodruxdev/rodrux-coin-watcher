import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  loadingTable: false,
  loadingCoinInfo: false,
  loadingExchanges: [false, false, false],
  loadingRelatedCoins: false,
  error: { message: '', error: null, section: '' },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
    toggleLoadingTable: (state) => {
      state.loadingTable = !state.loadingTable;
    },
    startLoadingCoin: (state) => {
      state.loadingCoinInfo = true;
      state.loadingRelatedCoins = true;
      state.loadingExchanges = [true, true, true];
    },
    toggleLoadingCoinInfo: (state) => {
      state.loadingCoinInfo = !state.loadingCoinInfo;
    },
    toggleLoadingRelatedCoins: (state) => {
      state.loadingRelatedCoins = !state.loadingRelatedCoins;
    },
    toggleLoadingExchanges: (state) => {
      state.loadingExchanges = state.loadingExchanges.map((item) => !item);
    },
    toggleLoadingExchange: (state, action) => {
      const index = action.payload;
      state.loadingExchanges[index] = !state.loadingExchanges[index];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    cleanError: (state) => {
      state.error = { message: '', error: null, section: '' };
    },
  },
});

const {
  setSearch,
  toggleLoadingTable,
  startLoadingCoin,
  toggleLoadingCoinInfo,
  toggleLoadingRelatedCoins,
  toggleLoadingExchanges,
  toggleLoadingExchange,
  setError,
  cleanError,
} = uiSlice.actions;

export {
  setSearch,
  toggleLoadingTable,
  startLoadingCoin,
  toggleLoadingCoinInfo,
  toggleLoadingRelatedCoins,
  toggleLoadingExchanges,
  toggleLoadingExchange,
  setError,
  cleanError,
};

export default uiSlice.reducer;
