import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css';

import { Field, reduxForm } from 'redux-form';

export const MyPosts = (props) => {

  const addNewPost = (value) => {
    props.addPost(value.addPost);
  };

  return (
    <>
      <div className={style.postWrap}>
        <AddPostReduxForm onSubmit={addNewPost} />

        {props.posts.map((post) => (
          <Post
            message={post.message}
            likesCount={post.likesCount}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
};

export const addNewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component='textarea'
        name='addPost'
        value={props.newPostText} />
      <button>Add post</button>
    </form>
  );
};

export const AddPostReduxForm = reduxForm({
  // a unique name for the form
  form: 'addPostBody',
})(addNewPostForm);
