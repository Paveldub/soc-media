const addPost = 'ADD-POST';
const updateNewText = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {

  switch (action.type) {
    case addPost:

      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }

      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    
    case updateNewText: 
      state.newPostText = action.newText;
      return state;
    
    default:
      return state;
  }
}

export const addPostActionCreator =  () => ({ type: addPost });
 
export const updateNewPostTextActionCreator =
  (text) => ({ type: updateNewText, newText: text });  