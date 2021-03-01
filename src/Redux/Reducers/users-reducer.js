const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {

    users: [
      {
        id: 1,
        followed: false,
        fullName: 'Pavel D',
        status: 'Junior React Developer',
        photoUrl: 'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        }
    },
    {
      id: 2,
      followed: true,
      fullName: 'Ivan K',
      status: 'Senior Front-end developer',
      photoUrl: 'https://www.pngjoy.com/pngm/804/9537968_avatar-web-developer-coder-avatar-hd-png-download.png',
      location: {
        city: 'Rome',
        country: 'Italy'
      }
    },
    {
      id: 3,
      followed: true,
      fullName: 'Vitaly B',
      status: 'Lead Front-end developer',
      photoUrl: 'https://materiell.com/wp-content/uploads/2015/03/john-full.png',
      location: {
        city: 'Riga',
        country: 'Latvia'
      }
    },
  ],
};

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,

        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true
            }
          }
          return user;
        })
      }

    case UNFOLLOW:
      return {
        ...state,

        users: state.users.map(user => {
          if (user.id !== action.userId) {
            return {
              ...user,
              followed: false
            }
          }
          return state;
        })
      }
    
    case SET_USERS: 
      return {
        ...state, 
        users: [...state.users, ...action.users]
      }
    
    default:
      return state
  }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId }); 
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users }); 

