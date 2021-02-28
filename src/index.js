import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { store } from './Redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={state} dispatch={store.dispatch.bind(store)}/>  
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  
  rerenderEntireTree(state);
});