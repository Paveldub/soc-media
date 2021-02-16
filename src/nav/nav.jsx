import React from 'react';
import style from './nav.module.css';
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink to='/maincontent' className={style.item} activeClassName={style.active}>Profile</NavLink>
      <NavLink to='/dialogs' className={style.item} activeClassName={style.active}>Messages</NavLink>
      <NavLink to='/music' className={style.item} activeClassName={style.active}>Music</NavLink>
      <NavLink to='/news' className={style.item} activeClassName={style.active}>News</NavLink>
      <NavLink to='/settings'className={style.item} activeClassName={style.active}>Settings</NavLink>
    </nav>
  )
}