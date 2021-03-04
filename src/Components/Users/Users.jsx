import React from 'react';
import styles from './styles.module.css';
import * as axios from 'axios';
import userImg from '../../assets/images/user-male-circle.png';

export class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

     axios
       .get(
         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
       )
       .then((response) => {
         this.props.setUsers(response.data.items);
       });
  }

  render() {

    let pageCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                  this.onPageChange(item);
                }}
                className={
                  this.props.currentPage === item ? styles.selectedPage : ''
                }
              >
                {item}
              </span>
            ))}
          </div>

          <div>
            {this.props.users.map((user) => (
              <div key={user.id} className={styles.alignContent}>
                <span className={styles.alignContentPhoto}>
                  <div className={styles.photoSize}>
                    <img
                      src={
                        user.photos.small !== null ? user.photos.small : userImg
                      }
                      alt="avatar"
                    ></img>
                  </div>
                  <div className={styles.buttonStyles}>
                    {user.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(user.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(user.id);
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
  }
}
