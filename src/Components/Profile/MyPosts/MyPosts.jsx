import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css'

export const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <>
      <div className={style.postWrap}>
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Add post</button>
        </div>
        { props.posts.map(p =>
          <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />)
        }
      </div>
    </>
  )
}