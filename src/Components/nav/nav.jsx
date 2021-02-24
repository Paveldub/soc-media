import React from 'react';
import style from './nav.module.css';
import { NavLink } from 'react-router-dom'
import { Friends } from './Friends/Friends'

export const Navigation = (props) => {

  return (
      <nav className={style.nav}>
      
        <NavLink to='/profile' className={style.item} activeClassName={style.active}>Profile</NavLink>
        <NavLink to='/dialogs' className={style.item} activeClassName={style.active}>Messages</NavLink>
        <NavLink to='/music' className={style.item} activeClassName={style.active}>Music</NavLink>
        <NavLink to='/news' className={style.item} activeClassName={style.active}>News</NavLink>
        <NavLink to='/settings' className={style.item} activeClassName={style.active}>Settings</NavLink>
      
      <h4 className={style.item}>Friends list</h4>
      <ul style={{ display: 'flex', textAlign: 'center'}}>
        {props.state.friends.map(friend =>
          <Friends name={friend.name} key={friend.id} id={friend.id} 
        />)}
      </ul>
    </nav>
  )
}