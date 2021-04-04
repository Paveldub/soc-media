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
};

export const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case addUserMessage:
      let body = action.addMessageBody;

      return {
        ...state,
        messages: [...state.messages, { id: 15, message: body }],
      };
    
    default:
      return state;
  }
}

export const addUserMessageActionCreator = (addMessageBody) => ({
  type: addUserMessage,
  addMessageBody,
});