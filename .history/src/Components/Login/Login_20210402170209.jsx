import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
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
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm />
    </>
  );
};
