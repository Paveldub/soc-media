import React from 'react';
import style from './preloader.module.css';

export const Preloader = () => {
  return (
    <>
      <div className={style.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </>
  );
}