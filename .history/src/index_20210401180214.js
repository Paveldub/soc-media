import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import App from './App';

import { store } from './Redux/redux-store';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);