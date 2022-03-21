import {
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  JOINED,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  UNJOINED,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  join: false
};

export const appReducer = (state = initialState, action) => {
  console.log("input text Reducer >", action);

  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };

    case JOINED:
      return {
        ...state,
        join: true,
      };

    case UNJOINED:
      return {
        ...state,
        join: false,
      };

    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: action.text,
      };

    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
