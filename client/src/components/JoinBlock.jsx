import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomName } from "../nameGenerator";
import { loaderOn, messagesLoad, photoLoad, setUsers, userJoin, userLoad } from "../redux/actions";
import axios from "axios";
import socket from "../socket";
import { userReducer } from "../redux/userReducer";

const JoinBlock = () => {
  const dispatch = useDispatch();

  const [messages, setMessage] = useState([]);

  const photo = useSelector((state) => {
    return state.photoReducer.photo;
  });

  useEffect(() => {
    dispatch(photoLoad());
  }, []);

  async function onEnter() {
    const name = randomName();
    dispatch(loaderOn());
    const userObj = {
      name,
      photo
    }
    dispatch(userJoin(name, photo));
    socket.emit("USER:JOIN", userObj);
    const { data } = await axios.get('/room');
    dispatch(userLoad(data.users))
    dispatch(messagesLoad(data.messages))
    console.log('THIS IS DATA >', data)

  }

  return (
    <div className="joinBlock">
      <h1 className="joinBlock__header">Добро пожаловать в чат-флудилку!</h1>
      <img className="joinBlock__logo" src="chat.png" />
      <button onClick={onEnter} className="joinBlock__button">
        Войти
      </button>
    </div>
  );
};

export default JoinBlock;
