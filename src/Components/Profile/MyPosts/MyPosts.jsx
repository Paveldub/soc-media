import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css'

export const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let postValue = newPostElement.current.value;
    props.addPost(postValue);
    
    newPostElement.current.value = '';
  }

  return (
    <>
      <div className={style.postWrap}>
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Add post</button>
        </div>
        { props.posts.map(post =>
          <Post message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />)
        }
      </div>
    </>
  )
}