const SET_USERS_DATA = 'SET_USERS_DATA';
const IS_FETCHING = 'IS_FETCHING';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state
  }
};

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USERS_DATA,
  data: { userId, login, email },
});

export const isFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
