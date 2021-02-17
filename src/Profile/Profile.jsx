import React from 'react';
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import style from './content.module.css';

export const Profile = (props) => {  
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  )
}