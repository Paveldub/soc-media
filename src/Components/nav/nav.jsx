import React from 'react';
import style from './nav.module.css';
import { NavLink } from 'react-router-dom';
import { Friends } from './Friends/Friends';

export const Navigation = (props) => {
  return (
    <nav className={style.nav}>
      <NavLink
        to="/login"
        className={style.item}
        activeClassName={style.active}
      >
        Login
      </NavLink>
      
      <NavLink
        to="/profile"
        className={style.item}
        activeClassName={style.active}
      >
        Профиль
      </NavLink>
      <NavLink
        to="/dialogs"
        className={style.item}
        activeClassName={style.active}
      >
        Сообщения
      </NavLink>

      <NavLink
        to="/users"
        className={style.item}
        activeClassName={style.active}
      >
        Пользователи
      </NavLink>

      <NavLink
        to="/music"
        className={style.item}
        activeClassName={style.active}
      >
        Музыка
      </NavLink>
      <NavLink to="/news" className={style.item} activeClassName={style.active}>
        Новости
      </NavLink>
      <NavLink
        to="/settings"
        className={style.item}
        activeClassName={style.active}
      >
        Настройки
      </NavLink>
      <NavLink
        to="/modalpage"
        className={style.item}
        activeClassName={style.active}
      >
        Модалка
      </NavLink>

      <NavLink
        to="/datepicker"
        className={style.item}
        activeClassName={style.active}
      >
        Datepicker
      </NavLink>

      <h4 className={style.item}>Friends list</h4>
      <ul style={{ display: 'flex', textAlign: 'center' }}>
        <Friends name={'Pavel'} key={'10'} id={'11'} />
      </ul>
    </nav>
  );
};
