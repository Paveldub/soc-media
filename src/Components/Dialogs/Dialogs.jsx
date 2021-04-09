import React from 'react';
import style from './Dialogs.module.scss';

import { DialogItem } from './DialogItems/DialogItems';
import { Message } from './Message/Message';

import { Field, reduxForm } from 'redux-form';

import { required, maxLengthCreator } from '../../helpers/validators';
import { Textarea } from '../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

export const Dialogs = (props) => {

  const addMessageSubmit = (values) => {
    props.addNewUserMessage(values.addNewMessageBody);
  }

  return (
    <div className={style.dialogWrap}>
      <div className={style.dialogsItems}>
        {props.dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} key={d.id} />
        ))}
      </div>
      <div className={style.messages}>
        {props.messages.map((m) => (
          <Message message={m.message} key={m.id} />
        ))}

        <AddMessageReduxForm onSubmit={addMessageSubmit} />
      </div>
      <div></div>
    </div>
  );
};

export const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="addNewMessageBody"
        placeholder="Enter your message"
        validate={[required, maxLength10]}
      />

      <button>DIALOG</button>
    </form>
  );
};

export const AddMessageReduxForm = reduxForm({
  // a unique name for the form
  form: 'addMessageBody',
})(AddMessageForm);
