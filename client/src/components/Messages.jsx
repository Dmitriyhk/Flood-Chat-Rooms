import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../socket";

const Messages = () => {
  const messagesRef = useRef(null);
  const [modalImage, setModalImage] = useState('');
  const userName = useSelector(state => state.userReducer.name);
  const userPhoto = useSelector(state => state.userReducer.photo);
  const messageList = useSelector((state) => state.messagesReducer.messages);
  console.log("MESSAGELIST", messageList);
  useEffect(() => {
    messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
  }, [messageList]);

  const meska = useSelector((state) => state.messagesReducer);
  console.log("meska", meska);
  // useEffect(() => {
  //   socket.on('ROOM:NEW_MESSAGE' , obj => {
  //     setMessage([...messages, obj])
  //   } )
  // }, [messages])

  const imageHandler = (e) => {
    setModalImage(e.target.src)
  }

  const modalBlockHandler = (e) => {
    setModalImage('')
  }

  console.log('modalImage', modalImage)
  

  return (
    <>{modalImage && <div onClick={modalBlockHandler} className="modalImage"><img className="modalImage-img" src={modalImage}/></div>}
    <div ref={messagesRef} className="chat-messages">
      
      <div className="messages">
        {messageList.map((message) => (
          <div className={message.userName === userName && message.userPhoto === userPhoto ? 'my-message' : "message"}>
            <div className="message-user">
              <img className="message-user__photo" src={message.userPhoto} /> <p className="message-user__name">{message.userName}</p>
            </div>
            <div className="message-content">
              {message.img && <img onClick={imageHandler} className="message-content__img" src={message.img} />}
              <p className="message-content__text">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Messages;
