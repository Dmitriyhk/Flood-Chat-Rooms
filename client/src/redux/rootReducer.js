import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { photoReducer } from "./photoReducer";

export const rootReducer = combineReducers({
  photoReducer,
  appReducer
})
