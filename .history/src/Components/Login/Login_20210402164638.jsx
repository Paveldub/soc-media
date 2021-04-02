import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name={'login'} type="text" placeholder="Login" />
        </div>
        <div>
          <Field name={'password'} type="password" placeholder="Password" />
        </div>
        <div>
          <label>
            {' '}
            Remember me
            <Field type="checkbox" name={'rememberMe'} />
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
  form: 'login'
})(LoginForm);

export const Login = (props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};
