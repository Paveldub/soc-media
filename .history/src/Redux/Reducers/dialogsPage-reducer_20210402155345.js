const userMessageValue = 'UPDATE-USER-MESSAGE-VALUE';
const addUserMessage = 'ADD-USER-MESSAGE';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Pavel',
    },
    {
      id: 2,
      name: 'Ivan',
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
    },
  ],

  messages: [
    {
      id: 1,
      message: 'hello',
    },
    {
      id: 2,
      message: 'YO YO YOY',
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
    },
  ],

  newMessageText: 'default state value',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case userMessageValue:
      return {
        ...state,
        newMessageText: action.newText,
      };

    case addUserMessage:
      let newMessage = {
        id: 111,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = (text) => ({
  type: userMessageValue,
  newText: text,
});

export const addUserMessageActionCreator = () => ({ type: addUserMessage });
