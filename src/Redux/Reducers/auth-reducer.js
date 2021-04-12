import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};


export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (
  dispatch
) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    // success, get auth data
    dispatch(getAuthUserData());
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
