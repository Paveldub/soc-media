import { profileReducer } from './profilePage-reducer';
import { dialogsReducer } from './dialogsPage-reducer';

export const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hey, how are you?',
          likesCount: 10
        },
        {
          id: 2,
          message: 'Hey, this is my first post',
          likesCount: 11
        },
        {
          id: 3,
          message: 'Hey, this is my THIRD post',
          likesCount: 122
        }
      ],

      newPostText: 'add your comment'
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Pavel'
        },
        {
          id: 2,
          name: 'Ivan'
        },
        {
          id: 3,
          name: 'Dmitro',
        },
        {
          id: 4,
          name: 'DickPick',
        },
        {
          id: 5,
          name: 'Olha',
        },
        {
          id: 6,
          name: 'Julia',
        }
      ],
    
      messages: [
        {
          id: 1,
          message: 'hello'
        },
        {
          id: 2,
          message: 'YO YO YOY'
        },
        {
          id: 3,
          message: 'Ivad ndadadad',
        },
        {
          id: 4,
          message: 'Message DickPick',
        },
        {
          id: 5,
          message: 'How is your Angular?',
        },
        {
          id: 6,
          message: 'How is your react?',
        }
      ],

      newMessageText: ''
    },

    friendsComponent: {
      friends: [
        { id: 1, name: 'Pavel' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Artem' },
      ]
    },
  },

  _callSubscriber() { },

  getState() {
    return this._state;
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  }, 

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state)
  }
}
    
    
  
