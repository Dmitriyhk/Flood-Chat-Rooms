import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { randomName } from '../nameGenerator'
import { loaderOn, photoLoad, userJoin } from '../redux/actions'
import axios from "axios";
import socket from '../socket';
import { userReducer } from '../redux/userReducer';

const JoinBlock = () => {
  const dispatch = useDispatch();

  const photo = useSelector(state => {
    return state.photoReducer.photo;
  });


  useEffect(() => {
    dispatch(photoLoad());
    
  }, []);



  if (!photo) {
    dispatch(photoLoad());
    console.log('huivloga', photo)
  }
 

  async function onEnter () {
    const name = randomName();
    dispatch(loaderOn());
    // await axios.post('/room', {
    //   name,
    //   photo
    // });
    socket.emit('USER:JOIN', {
      name,
      photo
    })
    dispatch(userJoin(name, photo))
  };

  
  
  return (
    <div className='joinBlock'>
      <h1 className='joinBlock__header'>Добро пожаловать в чат-флудилку!</h1>
      <img  className='joinBlock__logo' src='chat.png'/>
      <button onClick={onEnter} className='joinBlock__button'>Войти</button>
    </div>
  )
}

export default JoinBlock;