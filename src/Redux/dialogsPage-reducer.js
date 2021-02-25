const userMessageValue = 'UPDATE-USER-MESSAGE-VALUE';
const addUserMessage = 'ADD-USER-MESSAGE';

export const dialogsReducer = (state, action) => {

  switch (action.type) {
    case userMessageValue:
      state.newMessageText = action.newText;
      return state;
    case addUserMessage:
      let newUserMessage = {
        id: 111,
        message: state.newMessageText
      }

      state.messages.push(newUserMessage);
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
}

export const updateNewMessageActionCreator = (text) =>
  ({ type: userMessageValue, newText: text });  

export const addUserMessageActionCreator = () => ({ type: addUserMessage });