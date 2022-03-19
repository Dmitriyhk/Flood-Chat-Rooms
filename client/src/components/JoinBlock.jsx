import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { randomName } from '../nameGenerator'
import { loaderOn, photoLoad } from '../redux/actions'
import axios from "axios";

const JoinBlock = () => {
  const dispatch = useDispatch();

  


  useEffect(() => {
    dispatch(photoLoad());
    
  }, []);

  
 
  const photo = useSelector(state => {
    return state.photoReducer.photo;
  });
 

  function onEnter () {
    const name = randomName();
    axios.post('/room', {
      name,
      photo
    }).then(() => {
      dispatch(loaderOn());
    });
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