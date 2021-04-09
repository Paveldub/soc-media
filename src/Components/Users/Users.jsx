import React from 'react';
import styles from './styles.module.scss';
import userImg from '../../assets/images/user-male-circle.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

export const UsersItems = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <>
      {props.isFetching ? <div></div> : null}

      <div className={styles.pagination}>
        {pages.map((item) => (
          <span
            key={item}
            onClick={() => {
              props.onPageChange(item);
            }}
            className={props.currentPage === item ? styles.selectedPage : ''}
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
                <NavLink to={'/profile/' + user.id}>
                  <img
                    src={
                      user.photos.small !== null ? user.photos.small : userImg
                    }
                    alt="avatar"
                  ></img>
                </NavLink>
              </div>
              <div className={styles.buttonStyles}>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.followingProgressData(true, user.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'db0e5b87-b625-4714-9371-afb368cd0443',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(user.id);
                          }
                          props.followingProgressData(false, user.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.followingProgressData(true, user.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'db0e5b87-b625-4714-9371-afb368cd0443',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(user.id);
                          }
                          props.followingProgressData(false, user.id);
                        });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{user.name}</div>
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
