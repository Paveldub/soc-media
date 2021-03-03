import React from 'react';
import styles from './styles.module.css';
import * as axios from 'axios'
import userImg from '../../assets/images/user-male-circle.png'
  
export const Users = (props) => {

  React.useEffect(() => {
     axios
       .get('https://social-network.samuraijs.com/api/1.0/users')
       .then((response) => {
         props.setUsers(response.data.items);
       });
  }, [])

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id} className={styles.alignContent}>
          <span className={styles.alignContentPhoto}>
            <div className={styles.photoSize}>
              <img
                src={user.photos.small !== null ? user.photos.small : userImg }
                alt="avatar"
              ></img>
            </div>
            <div className={styles.buttonStyles}>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>Belarus</div>
            <div>Minsk</div>
          </span>
        </div>
      ))}
    </div>
  );
};
