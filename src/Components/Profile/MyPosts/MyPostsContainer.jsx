import { MyPosts } from './MyPosts';

import {
  addPostActionCreator,
} from '../../../Redux/Reducers/profilePage-reducer';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (addMessageBody) => {
      dispatch(addPostActionCreator(addMessageBody));
    }
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
