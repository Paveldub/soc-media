import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { dialogsReducer } from './Reducers/dialogsPage-reducer';
import { profileReducer } from './Reducers/profilePage-reducer';
import { friendsReducer } from './Reducers/friendsComponentReducer';
import { usersReducer } from './Reducers/usersPage-reducer';
import { authReducer } from './Reducers/auth-reducer';

import thunkMiddlewear from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddlewear))
);

window.store = store;
