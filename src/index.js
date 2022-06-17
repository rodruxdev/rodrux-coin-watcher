import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@routes/App';
import { Provider } from 'react-redux';
import store from '@reducers/AppStore';
import { BrowserRouter } from 'react-router-dom';
import '@styles/global.css';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
