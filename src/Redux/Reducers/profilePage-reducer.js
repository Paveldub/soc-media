const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_NEW_PROFILE = 'SET_NEW_PROFILE';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const GET_USER_STATUS = 'GET_USER_STATUS';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'Hey, how are you?',
      likesCount: 10,
    },
    {
      id: 2,
      message: 'Hey, this is my first post',
      likesCount: 11,
    },
    {
      id: 3,
      message: 'Hey, this is my THIRD post',
      likesCount: 122,
    },
  ],

  profile: null,
  status: '',
  getStatus: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:

      let body = action.addMessageBody;
      
      return {
        ...state,
        posts: [...state.posts, { id: 1, message: body }],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_NEW_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case GET_USER_STATUS:
      return {
        ...state,
        getStatus: action.getStatus,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (addMessageBody) => ({
  type: ADD_POST,
  addMessageBody,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setProfileUsersActionCreator = (profile) => ({
  type: SET_NEW_PROFILE,
  profile,
});

export const getUserStatusAC = (getStatus) => ({
  type: GET_USER_STATUS,
  getStatus,
});
export const updateUserStatusAC = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});
