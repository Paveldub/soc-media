import { applyMiddleware, combineReducers, createStore } from 'redux';

import { dialogsReducer } from './Reducers/dialogsPage-reducer';
import { profileReducer } from './Reducers/profilePage-reducer';
import { friendsReducer } from './Reducers/friendsComponentReducer';
import { usersReducer } from './Reducers/usersPage-reducer';
import { authReducer } from './Reducers/auth-reducer';
import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;