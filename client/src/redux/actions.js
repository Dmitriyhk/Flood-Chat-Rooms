import { ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON, JOINED, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, MESSAGES_LOAD, NEW_MESSAGE, PHOTO_LOAD, UNJOINED, USERS_LOAD, USER_JOIN, USER_LEAVE } from "./types";


export function photoLoad() {
  return async dispatch => {
    // Иногда приходит пустой url
    let data
    do {
      const response = await fetch('https://picsum.photos/150');
      data = await response;
    } while (!data.url) 
    dispatch({
      type: PHOTO_LOAD,
      data: data
    });
  };
};

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON
  };
};

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF
  };
};

export function joined() {
  return {
    type: JOINED
  };
};

export function unJoined() {
  return {
    type: UNJOINED
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


export function userLoad(users) {
  return {
    type: USERS_LOAD,
    users
  };
};
export function messagesLoad(messages) {
  return {
    type: MESSAGES_LOAD,
    messages
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