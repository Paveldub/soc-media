import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css';

export const MyPosts = (props) => {

  let addPost = () => {
    props.addPost();
  };

  let onValueChange = (e) => {
    let target = e.target.value;

    props.updateNewPostText(target);
  }

  return (
    <>
      <div className={style.postWrap}>
        <div>
          <textarea
            onChange={ onValueChange }
            value={ props.newPostText } 
          />
          <button
            onClick={addPost}>

            Add post
          </button>
        </div>
        {props.posts.map(post =>
          <Post message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />)
        }
      </div>
    </>
  )
}