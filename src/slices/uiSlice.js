import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  loadingTable: false,
  loadingCoinInfo: false,
  loadingExchanges: [false, false, false],
  loadingRelatedCoins: false,
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
} = uiSlice.actions;

export {
  setSearch,
  toggleLoadingTable,
  startLoadingCoin,
  toggleLoadingCoinInfo,
  toggleLoadingRelatedCoins,
  toggleLoadingExchanges,
  toggleLoadingExchange,
};

export default uiSlice.reducer;
