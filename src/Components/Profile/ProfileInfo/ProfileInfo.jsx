import React from 'react';
import style from './ProfileInfo.module.css'

export const Profile = (props) => {
  console.log(props)
  
  return (
    <>
      <div className={style.profileInfoWrap}>
        <img className={style.content_img} src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-blue-tech-line-background-promotion-banner-image_144856.jpg"></img>
      </div>
      ava + desc
    </>
  )
}