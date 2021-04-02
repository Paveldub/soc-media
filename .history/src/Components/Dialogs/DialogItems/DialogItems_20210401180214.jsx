import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItems.module.css'

export const DialogItem = (props) => {
  const path = `${/dialogs/}${props.id}`

  return (
    <div className={`${style.dialog} ${style.active}`}>
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}