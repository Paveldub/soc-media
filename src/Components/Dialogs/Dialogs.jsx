import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItems/DialogItems'
import { Message } from './Message/Message';
import { updateNewMessageActionCreator, addUserMessageActionCreator } from '../../Redux/dialogsPage-reducer';

export const Dialogs = (props) => {

  const onValueChange = (e) => {
    let target = e.target.value;

    props.dispatch(updateNewMessageActionCreator(target));
  }

  const addNewUserMessage =
    () => props.dispatch(addUserMessageActionCreator());

  return (
    <div className={style.dialogWrap}>
      <div className={style.dialogsItems}>
        {props.state.dialogs.map(d =>
          <DialogItem name={d.name} id={d.id} key={d.id} />
        )}
      </div>
      <div className={style.messages}>
        {props.state.messages.map(m =>
          <Message message={m.message} key={m.id} />
        )}
      </div>
      <div>
        
        <textarea
          value={props.state.newMessageText}
          onChange={onValueChange}
          placeholder='Add your message'
        >
        </textarea>
        <button onClick={ addNewUserMessage }>DIALOG</button>
      </div>
    </div>
  )
}