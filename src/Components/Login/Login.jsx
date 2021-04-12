import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLengthCreator } from '../../helpers/validators';
import { Input } from '../common/FormControls/FormControls';

import { login } from '../../Redux/Reducers/auth-reducer';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import style from '../common/FormControls/FormControls.module.scss';

const minLength = minLengthCreator(8);

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
            <Field type="checkbox" component="input" name={'rememberMe'} />
          </label>
        </div>
        
        {props.error && (
          <div className={style.formSummaryError}>{props.error}</div>
        )}

        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

export const Login = (props) => {

  const onSubmit = (formData) => {

    console.log(formData);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
