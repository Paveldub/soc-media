import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import AppContainer from './App';

import { store } from './Redux/redux-store';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
