import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const LoginForm = (props) => {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={'login'}
            component="input"
            type="text"
            placeholder="Login"
          />
        </div>
        <div>
          <Field
            name={'password'}
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label>
            {' '}
            Remember me
            <Field
              type="checkbox"
              component="input"
              name={'rememberMe'}
            />
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

export const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  };
  
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
