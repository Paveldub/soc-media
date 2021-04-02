import React from 'react';
import style from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={style.postWrap}>
      <div className={style.item}>
        <img
          className={style.item_img}
          alt=""
          src="http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"
        ></img>

        <span>{props.message}</span>

        <div>
          <span>likes: {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};
