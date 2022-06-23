/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from '@slices/uiSlice';
import tableSlice from '@slices/tableSlice';
import coinSlice from '@slices/coinSlice';
import convertorSlice from '@slices/convertorSlice';
import relatedCoinsSlice from '@slices/relatedCoinsSlice';
import exchangesSlice from '@slices/exchangesSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        ui: uiReducer,
        table: tableSlice,
        coin: coinSlice,
        convertor: convertorSlice,
        relatedCoins: relatedCoinsSlice,
        exchanges: exchangesSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
