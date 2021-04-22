import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogs.map((dialog) => {
          return (
            <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
          );
        })}
      </div>
      <div className={s.messages}>
        {state.messages.map((message) => {
          return <Message message={message.message} key={message.id} />;
        })}
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
