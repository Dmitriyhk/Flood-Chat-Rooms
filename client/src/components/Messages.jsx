import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import socket from '../socket'

const Messages = () => {
  const messagesRef = useRef(null)
  const [messages, setMessage] = useState([])

  useEffect(() => {
    testing()
    console.log('testing))#)')
  }, [])

  const testing = async () => {
    const { data }  = await axios.get('/room')
    setMessage(data)
    console.log('data',  data )
  }
 

  // socket.on('ROOM:MESSAGES', arrMes => {
  //   setMessage(arrMes)
  // })
  console.log('messages >', messages)

  const meska = useSelector(state => state.messagesReducer)
  console.log('meska', meska);
  useEffect(() => {
    socket.on('ROOM:NEW_MESSAGE' , obj => {
      setMessage([...messages, obj])
    } )
  }, [messages])
  console.log('ebanarot > ', messages)
  return (
    <div className='chat-messages'>
      <div ref={messagesRef} className="messages">
          {messages.map((message) => (
            <div className="message">
              <p>{message.text}</p>
              <img src={message.img}/>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Messages