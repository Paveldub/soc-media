import {
  updateNewMessageActionCreator,
  addUserMessageActionCreator
} from '../../Redux/Reducers/dialogsPage-reducer';

import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onValueChange: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    
    addNewUserMessage: () => {
      dispatch(addUserMessageActionCreator());
    }
  }
}

export const DialogsContainer =
  connect(mapStateToProps, mapDispatchToProps)(Dialogs);
  