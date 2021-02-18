import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItems/DialogItems'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
  const textAreaRef = React.createRef();

  const handleSumbit = () => {
    const textAreaRefValue = textAreaRef.current.value;

    alert(textAreaRefValue)
  }

  return (
    <div className={style.dialogWrap}>
      <div className={style.dialogsItems}>
        { props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />) }
      </div>
      <div className={style.messages}>
        { props.state.messages.map(m => <Message message={m.message} key={m.id}/>) }
      </div>
      <div>
        <textarea ref={textAreaRef}></textarea>
        <button onClick={handleSumbit}>click me</button>
      </div>
    </div>
  )
}