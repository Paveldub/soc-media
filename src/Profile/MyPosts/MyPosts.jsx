import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css'

export const MyPosts = () => {
  return (
    <>
      <div className={style.postWrap}>
        <Post message='Hey, this is my first post' like={1} />
        <Post message='Hey, this is my first post' like={5}/>
      </div>
    </>
  )
}