import { profileReducer } from './Reducers/profilePage-reducer';
import { dialogsReducer } from './Reducers/dialogsPage-reducer';

export const store = {

  _callSubscriber() { },

  getState() {
    return this._state;
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  }, 

  // dispatch(action) {
  //   // profileReducer(this._state.profilePage, action);
  //   // dialogsReducer(this._state.dialogsPage, action);

  //   this._callSubscriber(this._state)
  // }
}
    
    
  
