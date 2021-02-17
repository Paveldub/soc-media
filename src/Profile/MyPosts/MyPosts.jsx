import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css'

export const MyPosts = (props) => {
  const postsElems = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)

  return (
    <>
      <div className={style.postWrap}>
        {postsElems}
      </div>
    </>
  )
}