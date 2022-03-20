import { USERS_LOAD } from "./types";

const initialState = {
  users: []
};

export const usersListReducer = (state = initialState, action) => {
  switch(action.type) {
    case USERS_LOAD:
      const usersNew = action.data.map(user => {
        return {
          name: user.name,
          id: user.id,
          photo: user.photo
        }
      })
    default:
      return state;
  };
};