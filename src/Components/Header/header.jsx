import React, { useState } from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import { Toggler } from './menu-btn/menu-btn';
import { Sidebar } from '../common/sidebar/sibdear';

export const Header = (props) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    !sidebarOpen ? setSidebarOpen(true) : setSidebarOpen(false);
  };

  let sidebar;

  if (sidebarOpen) {
    sidebar = <Sidebar sidebar={'sidebar sidebar--active'} />;
  }

  return (
    <header className={style.header}>
      <div className="container">
        <div className="header__logo">
          <img
            className={style.header__img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          ></img>
        </div>

        <Toggler click={openHandler} />
      </div>

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <span>{props.login}</span>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
      </div>

      {sidebar}
    </header>
  );
};
