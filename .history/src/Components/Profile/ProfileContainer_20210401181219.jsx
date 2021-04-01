import React from 'react';
import style from './content.module.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Profile } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

import { profileUsers, getStatus } from '../../api/api';

import {
  setProfileUsersActionCreator,
  setStatusActionCreator,
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

    getStatus(userId).then((response) => {
      this.props.setUserStatus(response.data);
    });
  }

  render() {

    return (
      <div className={style.content}>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersProfile: (profile) => {
      dispatch(setProfileUsersActionCreator(profile));
    },
    setUserStatus: (status) => {
      dispatch(setStatusActionCreator(status));
    },
  };
};


const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default ProfileContainer = connect(mapStateToProps, mapDispatchToProps)
(WithUrlDataContainerComponent);
