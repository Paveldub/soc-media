import { MyPosts } from './MyPosts';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
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
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (target) => {
      dispatch(updateNewPostTextActionCreator(target));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
