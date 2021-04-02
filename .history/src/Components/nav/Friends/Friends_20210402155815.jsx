import React from 'react';
import styles from './Friends.module.css';

export const Friends = (props) => {
  return (
    <li>
      <div className={styles.photo}>
        <img
          style={{ width: '50px' }}
          src="https://miro.medium.com/max/488/0*VITcQBCJD_56Ifrf.png"
          alt=""
        ></img>
      </div>
      <div className="name">{props.name}</div>
    </li>
  );
};
