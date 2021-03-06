import React from 'react';
import { Profile } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import style from './content.module.css';
import * as axios from 'axios';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => console.log(response.data.aboutMe));
  }

  render() {
    return (
      <div className={style.content}>
        <Profile {...this.props} />
        <MyPostsContainer />
      </div>
    );
  }
}
