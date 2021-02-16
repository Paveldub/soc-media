import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItems/DialogItems'
import { Message } from './Message/Message'

export const Dialogs = () => {
  return (
    <div className={style.dialogWrap}>
      <div className={style.dialogsItems}>
        <DialogItem name="Pavel"  id='1'/>
        <DialogItem name="Ivan" id='2' />
        <DialogItem name="Dmitro" id='3' />
        <DialogItem name="DickPick"  id='4'/>
        <DialogItem name="Olha"  id='5'/>
        <DialogItem name="Julia" id='6' />
      </div>
      <div className={style.messages}>
        <Message message="hello" />
        <Message message="Pavel" />
        <Message message="Ivad ndadadad" />
      </div>
    </div>
  )
}