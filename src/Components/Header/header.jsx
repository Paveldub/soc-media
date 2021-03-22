import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import { Toggler } from './menu-btn/menu-btn';

export const Header = (props) => {

  return (
    <header className={style.header}>
      <div className="container">
        <div className="header__logo">
          <img
            className={style.header__img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          ></img>
        </div>

        <Toggler />
      </div>

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <span>{props.login}</span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
