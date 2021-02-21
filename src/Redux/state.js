import { rerenderEntireTree } from "../render";

export const state = {
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

    newPostText: 'default value'
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
    
    messages:  [
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
      ]
  },

  friendsComponent: {
    friends: [
      { id: 1, name: 'Pavel' },
      { id: 2, name: 'Ivan' },
      { id: 3, name: 'Artem' },
    ]
  }
}

export const addPost = (postMessage) => {

  let newPost = {
    id: 66,
    message: postMessage,
    likesCount: 55
  };

  state.profilePage.posts.push(newPost);
  
  state.profilePage.newPostText = '';
  
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  
  rerenderEntireTree(state);
}; 


window.state = state;