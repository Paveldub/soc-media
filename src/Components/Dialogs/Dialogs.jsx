import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItems/DialogItems'
import { Message } from './Message/Message';
import { updateNewMessageActionCreator, addUserMessageActionCreator } from '../../Redux/state'

export const Dialogs = (props) => {

  let textAreaInput = React.createRef();

  const onValueChange = (text) => {
    let textAreaValue = textAreaInput.current.value;

    props.dispatch(updateNewMessageActionCreator(textAreaValue));
  }

  const addNewUserMessage = () => props.dispatch(addUserMessageActionCreator());

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
        <textarea value={props.state.newPostTextUser} onChange={onValueChange} ref={textAreaInput}></textarea>
        <button onClick={addNewUserMessage}>DIALOG</button>
      </div>
    </div>
  )
}