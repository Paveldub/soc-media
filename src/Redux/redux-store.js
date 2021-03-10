import { combineReducers, createStore } from 'redux';

import { dialogsReducer } from './Reducers/dialogsPage-reducer';
import { profileReducer } from './Reducers/profilePage-reducer';
import { friendsReducer } from './Reducers/friendsComponentReducer';
import { usersReducer } from './Reducers/usersPage-reducer';
import authReducer from './Reducers/auth-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

export const store = createStore(reducers);

window.store = store;