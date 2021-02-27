import { combineReducers, createStore } from 'redux';

import { dialogsReducer } from './Reducers/dialogsPage-reducer';
import { profileReducer } from './Reducers/profilePage-reducer';
import { friendsReducer } from './Reducers/friendsComponentReducer';

const reducers = combineReducers ({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer
});

export const store = createStore(reducers);