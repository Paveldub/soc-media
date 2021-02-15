import React from 'react';
import {MyPosts} from './MyPosts/MyPosts'
import style from './content.module.css';

export const MainContent = () => {
  return (
    <div className={style.content}>
      <div>
        <img className={style.content_img} src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-blue-tech-line-background-promotion-banner-image_144856.jpg"></img>
      </div>
      <MyPosts />
    </div>
  )
}