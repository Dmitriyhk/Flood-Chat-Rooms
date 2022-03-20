import { ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON, JOINED, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, NEW_MESSAGE, PHOTO_LOAD, USER_JOIN, USER_LEAVE } from "./types";


export function photoLoad() {
  return async dispatch => {
    let data
    while (!data || !data.url) {
      const response = await fetch('https://picsum.photos/150');
      data = await response;
      console.log('ebatvswxluseu >', data.url)
      dispatch({
        type: PHOTO_LOAD,
        data: data
      });
    }
  };
};

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON
  };
};

export function errorOn(text) {
  return {
    type: ERROR_DISPLAY_ON,
    text
  };
};

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF
  };
};

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF
  };
};

export function userJoin( name, photo) {
  return {
    type: USER_JOIN,
    name,
    photo
  };
};

export function userUnjoin (id) {
  return {
    type: USER_LEAVE,
    id
  };
};

export function newMessage (userName, userPhoto, text, img) {
  return {
    type: NEW_MESSAGE,
    userName, 
    userPhoto, 
    text, 
    img
  }
}

// export function usersLoad() {
//   return async dispatch => {
//     const response = await fetch()
//   }
// }