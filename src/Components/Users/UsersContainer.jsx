import { Users } from './Users';

import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator
} from '../../Redux/Reducers/users-reducer';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },

    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);