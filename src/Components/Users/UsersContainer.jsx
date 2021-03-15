import { connect } from 'react-redux';
import React from 'react';
import { UsersItems } from './Users';
import { Preloader } from '../common/preloader';

import { getUsers } from '../../api/api';

import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  isFetchingDataActionCreator,
  followingInProgressActionCreator,
} from '../../Redux/Reducers/usersPage-reducer';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.isFetchingData(true);

    getUsers(this.props.currentPage, this.props.pageSize).then((response) => {

      this.props.setUsers(response.items);
      this.props.setTotalUsersCount(response.totalCount);

      this.props.isFetchingData(false);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.isFetchingData(true);

    getUsers(pageNumber, this.props.pageSize).then((response) => {
        this.props.setUsers(response.items);

        this.props.isFetchingData(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <UsersItems
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            users={this.props.users}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingProgressData={this.props.followingProgressData}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount));
    },
    isFetchingData: (isFetching) => {
      dispatch(isFetchingDataActionCreator(isFetching));
    },
    followingProgressData: (followingInProgress, userId) => {
      dispatch(followingInProgressActionCreator(followingInProgress, userId));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);
