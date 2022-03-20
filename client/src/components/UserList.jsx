import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import socket from '../socket'

const UserList = () => {
  // const [array, setArray] = useState([])
  const userList = useSelector(state => state.usersListReducer.users)
  console.log('USERLIST', userList)
  // useEffect(() => {
  //   setArray(test)

  // }, [])


  return (
    <div className='chat-userList'>
      <p  className='chat-userList__header'>Онлайн: {userList.length}</p> 
       {userList.map(user => {
        return <div className='userList-user'>
        <img className='userList-user__photo' src={user.photo}/>
        <span className='userList-user__name'>{user.name}</span>
        </div>
      })}
    </div>
  )
}

export default UserList