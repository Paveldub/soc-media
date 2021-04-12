import React from 'react';
import style from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { Toggler } from './menu-btn/menu-btn';

export const Header = (props) => {

  console.log(props)

  return (
    <header className={style.header}>
      <div className="container">
        <div className="header__logo">
          <img
            className={style.header__img}
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          ></img>
        </div>

        <Toggler />
      </div>

      <div className={style.loginBlock}>
        <div className={style.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login}
              <button onClick={props.logout}>Log out</button>
            </div>
          ) : (
            <NavLink to={'/login'}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
