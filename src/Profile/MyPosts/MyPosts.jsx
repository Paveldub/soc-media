import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css'

export const MyPosts = () => {
  let posts = [
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
  ];

  const postsElems = posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)

  return (
    <>
      <div className={style.postWrap}>
        {postsElems}
      </div>
    </>
  )
}