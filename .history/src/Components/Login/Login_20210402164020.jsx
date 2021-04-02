import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const LoginForm = (props) => {
  return (
    <>
      <form>
        <div>
          <Field name={'login'} type="text" placeholder="Login" />
        </div>
        <div>
          <Field type="password" placeholder="Password" />
        </div>
        <div>
          <label>
            {' '}
            Remember me
            <Field type="checkbox" />
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export const Login = (props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};
