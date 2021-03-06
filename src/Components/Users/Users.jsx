import React from 'react';
import styles from './styles.module.css';
import userImg from '../../assets/images/user-male-circle.png';

export const UsersItems = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className={styles.pagination}>
        {pages.map((item) => (
          <span
            key={item}
            onClick={() => {
              props.onPageChange(item);
            }}
            className={
              props.currentPage === item ? styles.selectedPage : ''
            }
          >
            {item}
          </span>
        ))}
      </div>

      <div>
        {props.users.map((user) => (
          <div key={user.id} className={styles.alignContent}>
            <span className={styles.alignContentPhoto}>
              <div className={styles.photoSize}>
                <img
                  src={user.photos.small !== null ? user.photos.small : userImg}
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
    </>
  );
};
