import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import socket from '../socket'

const Messages = () => {
  const messagesRef = useRef(null)
  const [messages, setMessage] = useState([])
  console.log('afasfsaebat')

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