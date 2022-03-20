import { USERS_LOAD } from "./types";

const initialState = {
  users: []
};

export const usersListReducer = (state = initialState, action) => {
  console.log('ТУТ У НАС ПРОВЕРКА ЮЗЕР ЛИСТ >>', action.users)
  switch(action.type) {
    case USERS_LOAD:
        return {
          ...state,
          users: action.users
        }
    default:
      return state;
  };
};