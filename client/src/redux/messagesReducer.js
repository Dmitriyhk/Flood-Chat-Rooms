import { MESSAGES_LOAD, NEW_MESSAGE } from "./types";

const initialState = {
  messages: []
};

export const messagesReducer = (state = initialState, action) => {
  console.log('ТУТ У НАС ПРОВЕРКА MESSAGES ЛИСТ >>', action.messages)
  switch(action.type) {
    case MESSAGES_LOAD:
        return {
          ...state,
          messages: action.messages
        }
    case NEW_MESSAGE:
      console.log('TEST >>><<<<', action)
      const { userName, userPhoto, text, img } = action
      return {
        ...state,
        messages: [...state.messages, {userName, userPhoto, text, img}]
      }
      
    default:
      return state;
  };
};


// export const messagesReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case MESSAGES_LOAD:
//       action.data.map(message => {
//         return {
//         userName: message.userName,
//         userPhoto: message.userPhoto,
//         text: message.text,
//         img: message.img
//         }
//       }) 
     
//     case NEW_MESSAGE:
//       return {
//         ...state,
//         userName: action.userName,
//         userPhoto: action.userPhoto,
//         text: action.text,
//         img: action.img
//       };
//     default:
//       return state;
//   };
// };