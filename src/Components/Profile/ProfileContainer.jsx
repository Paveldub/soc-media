import React from 'react';
import style from './content.module.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Profile } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

import { profileUsers, getUserStatus, updateUserStatus } from '../../api/api';

import {
  setProfileUsersActionCreator,
  getUserStatusAC,
  updateUserStatusAC,
} from '../../Redux/Reducers/profilePage-reducer';

export class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 15;
    }

    profileUsers(userId).then((response) => {
     this.props.setUsersProfile(response.data);
    });

    getUserStatus(userId).then((response) => {
      this.props.getUserStatusAC(response.data);
    });

    updateUserStatus(userId).then((response) => {
      if (response.data.resultColde === 0) {
        this.props.updateUserStatusAC(response.data);
      }
    });
  }

  render() {

    return (
      <div className={style.content}>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          getStatus={this.props.getStatus}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  getStatus: state.profilePage.getStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersProfile: (profile) => {
      dispatch(setProfileUsersActionCreator(profile));
    },
    getUserStatusAC: (getStatus) => {
      dispatch(getUserStatusAC(getStatus));
    },
    updateUserStatusAC: (status) => {
      dispatch(updateUserStatusAC(status));
    }
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default ProfileContainer = connect(mapStateToProps, mapDispatchToProps)
(WithUrlDataContainerComponent);
