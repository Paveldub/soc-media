import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';

export const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () =>  props.dispatch(addPostActionCreator());

  let onValueChange = () => {
    let text = newPostElement.current.value;

    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <>
      <div className={style.postWrap}>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onValueChange}
            value={props.newPostText} 
          />
          <button onClick={ addPost }>Add post</button>
        </div>
        {props.posts.map(post =>
          <Post message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />)
        }
      </div>
    </>
  )
}