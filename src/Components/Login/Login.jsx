import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLengthCreator } from '../../helpers/validators';
import { Input } from '../common/FormControls/FormControls';

const minLength = minLengthCreator(8)

export const LoginForm = (props) => {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name="username"
            component={Input}
            type="text"
            placeholder="Login"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="password"
            component={Input}
            type="password"
            placeholder="Password"
            validate={[required, minLength]}
          />
        </div>
        <div>
          <label>
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
