import React from 'react';
import style from './nav.module.css';

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>Profile</div>
      <div className={style.item}>Messages</div>
      <div className={style.item}>Music</div>
      <div className={style.item}>News</div>
      <div className={style.item}>Settings</div>
    </nav>
  )
}