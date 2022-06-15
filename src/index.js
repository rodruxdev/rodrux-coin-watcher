import React from 'react';
import ReactDOM from 'react-dom';
import App from '@routes/App';
import { Provider } from 'react-redux';
import store from '@reducers/AppStore';
import { BrowserRouter } from 'react-router-dom';
import '@styles/global.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
