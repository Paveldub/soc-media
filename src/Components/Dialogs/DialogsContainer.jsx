import React from 'react';

import {
  updateNewMessageActionCreator,
  addUserMessageActionCreator
} from '../../Redux/Reducers/dialogsPage-reducer';

import { Dialogs } from './Dialogs';

export const DialogsContainer = (props) => {

  const onValueChange = (text) => {
    let action = updateNewMessageActionCreator(text)

    props.dispatch(action);
  }

  const addNewUserMessage = () => {
    props.dispatch(addUserMessageActionCreator());
  }
   
  return (
    <Dialogs
      onValueChange={onValueChange}
      addNewUserMessage={addNewUserMessage}
      state={props.state}
      messages={props.state}
    />
  )
}