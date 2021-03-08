import React from 'react';
import { Profile } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import style from './content.module.css';
import { connect } from 'react-redux';
import * as axios from 'axios';

import { setProfileUsersActionCreator } from '../../Redux/Reducers/profilePage-reducer';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }

  render() {
    return (
      <div className={style.content}>
        <Profile profile={this.props.profile} />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersProfile: (profile) => {
      dispatch(setProfileUsersActionCreator(profile));
    },
  };
};

export default ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
