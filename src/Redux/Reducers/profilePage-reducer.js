const addPost = 'ADD-POST';
const updateNewText = 'UPDATE-NEW-POST-TEXT';

let initialState = {

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

    newPostText: 'leave your comment below'
 
};

export const profileReducer = (state = initialState, action) => {

  let stateCopy = {
    ...state
  }

  switch (action.type) {
    case addPost:
      
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }

      stateCopy.posts.push(newPost); // push data to new state copy
      stateCopy.newPostText = '';
      return stateCopy; // return new state data
    case updateNewText:
      let copyState = { ...state };
      copyState.newPostText = action.newText;
      return copyState;
      default:
        return state
  }
}

export const addPostActionCreator =  () => ({ type: addPost });
 
export const updateNewPostTextActionCreator =
  (text) => ({ type: updateNewText, newText: text });  