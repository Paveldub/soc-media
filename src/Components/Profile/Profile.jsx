import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import style from './content.module.css';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = (props) => {  

  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer
        posts={props.state.posts}
        dispatch={props.dispatch}
        newPostText={props.state.newPostText} 
      />
    </div>
  )
}