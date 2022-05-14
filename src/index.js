import React from 'react';
import ReactDOM from 'react-dom';
import App from '@routes/App';
import { Provider } from 'react-redux';
import '@styles/global.css';
import store from './AppStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
