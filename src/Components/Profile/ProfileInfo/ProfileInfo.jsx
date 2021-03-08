import React from 'react';
import style from './ProfileInfo.module.css';
import { Preloader } from '../../common/preloader';

export const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={style.profileInfoWrap}>
        <img
          className={style.content_img}
          src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
      <div>
        <img src={props.profile.photos.large}></img>
      </div>
      <div className={style.direction}>
        <span>{props.profile.fullName}</span>
        <span>{props.profile.aboutMe}</span>
        <div className={style.directionSecond}>
          <span>Looking for a job: </span>
          {props.profile.lookingForAJob ? (
            <img
              className={style.small}
              src="https://media.istockphoto.com/photos/3d-small-people-oh-yes-picture-id542307202"
            ></img>
          ) : (
            <img
              className={style.small}
              src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/e/n/engineer-grade-stop-signs-rm168-rm168-lg.jpg"
            ></img>
          )}
        </div>
        <span>{props.profile.lookingForAJobDescription}</span>
      </div>
    </>
  );
};
