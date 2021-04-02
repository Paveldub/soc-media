import React from 'react';
import { Form, Field } from 'react-final-form';

export const LoginForm = (props) => {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>

            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            
            <div>
              <label>Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>

            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
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
