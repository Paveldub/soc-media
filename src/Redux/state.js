const addPost = 'ADD-POST';
const updateNewText = 'UPDATE-NEW-POST-TEXT';
const userMessageValue = 'UPDATE-USER-MESSAGE-VALUE';
const addUserMessage = 'ADD-USER-MESSAGE';

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

      newPostTextUser: 'message from user'
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
    if (action.type === addPost) {

      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      
      this._state.profilePage.newPostText = '';
      
      this._callSubscriber(this._state);

    } else if (action.type === updateNewText) {
      this._state.profilePage.newPostText = action.newText;
    
      this._callSubscriber(this._state);

    } else if (action.type === userMessageValue) {

      this._state.dialogsPage.newPostTextUser = action.newText;
      
      this._callSubscriber(this._state);
    } else if (action.type === addUserMessage) {

      let newUserMessage = {
        id: 111,
        message: this._state.dialogsPage.newPostTextUser
      }

      this._state.dialogsPage.messages.push(newUserMessage);

      this._state.dialogsPage.newPostTextUser = '';

      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator =
  () => ({ type: addPost });

export const updateNewPostTextActionCreator =
  (text) => ({ type: updateNewText, newText: text });  

export const updateNewMessageActionCreator = (text) =>
  ({ type: userMessageValue, newText: text });  

export const addUserMessageActionCreator = () => ({ type: addUserMessage });
    
    
  
