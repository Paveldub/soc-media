import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItems/DialogItems'
import { Message } from './Message/Message'

export const Dialogs = () => {
  let dialogs = [
    {
      id: 1,
      name: 'Pavel'
    },
    {
      id: 2,
      name: 'Ivan'
    },
    {
      id: 3,
      name: 'Dmitro',
    },
    {
      id: 4,
      name: 'DickPick',
    },
    {
      id: 5,
      name: 'Olha',
    },
    {
      id: 6,
      name: 'Julia',
    }
  ];

  let messages = [
    {
      id: 1,
      message: 'hello'
    },
    {
      id: 2,
      message: 'YO YO YOY'
    },
    {
      id: 3,
      message: 'Ivad ndadadad',
    },
    {
      id: 4,
      message: 'Message DickPick',
    },
    {
      id: 5,
      message: 'How is your Angular?',
    },
    {
      id: 6,
      message: 'How is your react?',
    }
  ];

  const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
  const messagesElemets = messages.map(m => <Message message={m.message} key={m.id}/>)

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