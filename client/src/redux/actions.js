import { ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON, JOINED, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, PHOTO_LOAD } from "./types"


export function photoLoad() {
  return async dispatch => {
    
      const response = await fetch('https://picsum.photos/150')
      const data = await response
      dispatch({
        type: PHOTO_LOAD,
        data: data
      })
    
  }
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON
  }
}

export function errorOn(text) {
  return {
    type: ERROR_DISPLAY_ON,
    text
  }
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF
  }
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF
  }
}