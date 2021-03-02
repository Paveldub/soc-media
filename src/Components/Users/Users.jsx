import React from 'react';
import styles from './styles.module.css';

export const Users = (props) => {
  
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: 'Pavel D',
        status: 'Junior React developer',
        photoUrl:
          'https://instagram.fiev2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/129551589_439863913686179_8896617247160536959_n.jpg?tp=1&_nc_ht=instagram.fiev2-1.fna.fbcdn.net&_nc_ohc=2dvbP6M0OxUAX_VFxoG&oh=eeeafcd03479200b7708b47a50ad31a4&oe=6069025F',
        location: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
      {
        id: 2,
        fullName: 'Vital B',
        followed: true,
        status: 'Front-end lead developer',
        photoUrl: 'https://image.flaticon.com/icons/png/512/213/213817.png',
        location: {
          country: 'Latvia',
          city: 'Riga',
        },
      },
      {
        id: 3,
        fullName: 'Artem V',
        followed: false,
        status: 'React developer',
        photoUrl:
          'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
        location: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id} className={styles.alignContent}>
          <span className={styles.alignContentPhoto}>
            <div className={styles.photoSize}>
              <img src={user.photoUrl} alt="avatar"></img>
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
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
