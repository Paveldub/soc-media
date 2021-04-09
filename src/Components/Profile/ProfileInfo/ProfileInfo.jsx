import React from 'react';
import style from './ProfileInfo.module.scss';
import { Preloader } from '../../common/preloader';
import userImg from '../../../assets/images/user-male-circle.png';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

export const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={style.profileElems}>
        <ProfileStatus getStatus={props.getStatus} />
        <div className={style.roundPic}>
          {props.profile.photos.large ? (
            <img src={props.profile.photos.large} alt=""></img>
          ) : (
            <img src={userImg} alt=""></img>
          )}
        </div>
        <div className={style.direction}>
          <span>{props.profile.fullName}</span>
          <span>{props.profile.aboutMe}</span>
          <div className={style.directionSecond}>
            <span>Looking for a job: </span>
            {props.profile.lookingForAJob ? (
              <img
                className={style.small}
                alt=""
                src="https://media.istockphoto.com/photos/3d-small-people-oh-yes-picture-id542307202"
              ></img>
            ) : (
              <img
                  className={style.small}
                  alt=""
                src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/e/n/engineer-grade-stop-signs-rm168-rm168-lg.jpg"
              ></img>
            )}
          </div>
          <span>{props.profile.lookingForAJobDescription}</span>
        </div>
      </div>
    </>
  );
};
