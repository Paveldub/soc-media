import React from 'react';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <>
      <div className='post-wrap'>
        <Post message='Hey, this is my first post' like={1} />
          <Post message='Hey, this is my first post' like={5}/>
      </div>
    </>
  )
}