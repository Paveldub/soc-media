import { getAuthUserData } from './auth-reducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
