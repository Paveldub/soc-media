import {
  addUserMessageActionCreator,
} from '../../Redux/Reducers/dialogsPage-reducer';

import { withAuthRedirect } from '../../HOC/withAuthRedirect';

import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUserMessage: (addMessageBody) => {
      dispatch(addUserMessageActionCreator(addMessageBody));
    },
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
