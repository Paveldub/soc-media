const userMessageValue = 'UPDATE-USER-MESSAGE-VALUE';
const addUserMessage = 'ADD-USER-MESSAGE';

let initialState = {
    dialogs: [
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
    ],

    messages: [
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
    ],

    newMessageText: 'default state value'
};

export const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {
    ...state
  }

  switch (action.type) {
    case userMessageValue:        
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    case addUserMessage:
      let newUserMessage = {
        id: 111,
        message: state.newMessageText
      }
      
      stateCopy.messages.push(newUserMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    default:
      return state;
  }
}

export const updateNewMessageActionCreator = (text) =>
  ({ type: userMessageValue, newText: text });  

export const addUserMessageActionCreator = () => ({ type: addUserMessage });