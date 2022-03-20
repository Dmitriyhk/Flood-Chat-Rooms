import React, { useState } from 'react'
import socket from '../socket'

const UserList = () => {
  const [array, setArray] = useState([])
  socket.on('USER:JOINED', name => {
    setArray(name)
  })

  return (
    <div className='chat-userList'>
      <p  className='chat-userList__header'>Онлайн: {array.length}</p>
      {array.map(user => {
        return <div className='userList-user'>
        <img className='userList-user__photo' src={user.photo}/>
        <span className='userList-user__name'>{user.name}</span>
        </div>
      })}
    </div>
  )
}

export default UserList