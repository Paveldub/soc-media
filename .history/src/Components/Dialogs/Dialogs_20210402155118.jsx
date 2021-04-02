import React from 'react';
import style from './Dialogs.module.css';

import { DialogItem } from './DialogItems/DialogItems';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
  const onValueChange = (e) => {
    let target = e.target.value;

    props.onValueChange(target);
  };

  const addNewUserMessage = () => {
    props.addNewUserMessage();
  };

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
        <textarea
          value={props.newMessageText}
          onChange={onValueChange}
        ></textarea>
        <button onClick={addNewUserMessage}>DIALOG</button>
      </div>
      <div></div>
    </div>
  );
};
