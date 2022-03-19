import { PHOTO_LOAD } from "./types"


export function photoLoad() {
  return async dispatch => {
    
      const response = await fetch('https://picsum.photos/150')
      console.log(response)
      const data = await response
      dispatch({
        type: PHOTO_LOAD,
        data: data
      })
    
  }
}