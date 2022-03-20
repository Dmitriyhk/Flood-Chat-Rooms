import { USER_JOIN, USER_LEAVE } from "./types";

const initialState = {
  name: '',
  photo: ''
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_JOIN:
      return {
        ...state,
        name: action.name,
        photo: action.photo
      };
    case USER_LEAVE:
      return (() => {
        const { id } = action;
        const { users } = state;
        const itemIndex = users.findIndex(user => user.ud === id);

        const newUserList = [
          ...users.slice(0, itemIndex),
          ...users.slice(itemIndex + 1)
        ];
        return {
          ...state,

        }
      });
    default:
      return state;
  };
};