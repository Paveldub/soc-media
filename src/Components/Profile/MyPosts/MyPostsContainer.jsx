import React from 'react';
import { MyPosts } from './MyPosts';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../Redux/Reducers/profilePage-reducer';

export const MyPostsContainer = (props) => {

  let addPost = () =>
    props.dispatch(addPostActionCreator());

  let onValueChange = (text) => {
    let action = updateNewPostTextActionCreator(text);

    props.dispatch(action);
  }

  return (
    <>
      <MyPosts
        updateNewPostText={onValueChange}
        addPost={addPost}
        posts={props.posts}
        newPostText={props.newPostText} 
      />
    </>
  )
}
