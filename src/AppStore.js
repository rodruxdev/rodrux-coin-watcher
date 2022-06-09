import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@slices/uiSlice';
import tableSlice from '@slices/tableSlice';
import coinSlice from './slices/coinSlice';
import convertorSlice from './slices/convertorSlice';
import relatedCoinsSlice from './slices/relatedCoinsSlice';
import exchangesSlice from './slices/exchangesSlice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    table: tableSlice,
    coin: coinSlice,
    convertor: convertorSlice,
    relatedCoins: relatedCoinsSlice,
    exchanges: exchangesSlice,
  },
});

export default store;
