import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import socket from '../socket'

const Header = () => {
  const userName = useSelector(state => state.userReducer.name);
  const userPhoto = useSelector(state => state.userReducer.photo);
  
  useEffect(() => {
    socket.on('USER:JOINED', name => {
      console.log(name)
      console.log( 'Пользователь ' + name[name.length - 1].name + ' зашёл к нам!')
    })
  }, [])
  return (
    <div className='chat-header'>
      <img className='chat-header__img' src={userPhoto} />
      <p className='chat-header__name'>{userName}</p>
    </div>
  )
}

export default Header