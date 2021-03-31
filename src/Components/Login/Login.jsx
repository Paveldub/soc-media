import React from 'react';

export const LoginForm = (props) => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" placeholder="Login" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <label> Remember me
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}

export const Login = (props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};
