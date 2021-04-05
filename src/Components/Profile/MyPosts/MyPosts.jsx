import React from 'react';
import { Post } from './Post/Post';
import style from './MyPosts.module.css';

import { Field, reduxForm } from 'redux-form';

// helper validator 
import { required, maxLengthCreator } from '../../../helpers/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

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

export const AddNewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="addPost"
        value={props.newPostText}
        validate={[required, maxLength10]}
        placeholder="Add message. Max length 10 symbols"
      />
      <button>Add post</button>
    </form>
  );
};

export const AddPostReduxForm = reduxForm({
  // a unique name for the form
  form: 'addPostBody',
})(AddNewPostForm);
