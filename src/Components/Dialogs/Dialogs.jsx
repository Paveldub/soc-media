import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItems/DialogItems'
import { Message } from './Message/Message'

export const Dialogs = (props) => {

  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
  const messagesElemets = props.state.messages.map(m => <Message message={m.message} key={m.id}/>)

  return (
    <div className={style.dialogWrap}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        { messagesElemets }
      </div>
    </div>
  )
}