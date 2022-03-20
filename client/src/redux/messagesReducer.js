import { NEW_MESSAGE } from "./types";

const initialState = {
  userName: '',
  userPhoto: '',
  text: '',
  img: ''
};

export const messagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        userName: action.userName,
        userPhoto: action.userPhoto,
        text: action.text,
        img: action.img
      };
    default:
      return state;
  };
};