import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css'

export const MyPosts = (props) => {

  const textAreaRef = React.createRef();

  const addPost = () => {
    const textAreaRefValue = textAreaRef.current.value;
    alert(textAreaRefValue)
  }

  return (
    <>
      <div className={style.postWrap}>
        <div>
          <textarea ref={textAreaRef}></textarea>
          <button onClick={addPost}>Add post</button>
        </div>
        { props.posts.map(p =>
           <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />)
        }
      </div>
    </>
  )
}