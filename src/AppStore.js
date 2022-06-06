import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@slices/uiSlice';
import tableSlice from '@slices/tableSlice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    table: tableSlice,
  },
});

export default store;
