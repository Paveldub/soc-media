import React from 'react';
import style from './content.module.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

import { Profile } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

import { profileUsers } from '../../api/api';
import { setProfileUsersActionCreator } from '../../Redux/Reducers/profilePage-reducer';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15;
    }

    profileUsers(userId).then((response) => {
     this.props.setUsersProfile(response.data);
   });
  }

  render() {

    return (
      <div className={style.content}>
        <Profile profile={this.props.profile} {...this.props} />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersProfile: (profile) => {
      dispatch(setProfileUsersActionCreator(profile));
    },
  };
};


const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
