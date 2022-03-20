import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newMessage } from '../redux/actions';
import socket from '../socket';

const SendingMessage = () => {
  const [messageValue, setMessageValue] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const userName = useSelector(state => state.userReducer.name);
  const userPhoto = useSelector(state => state.userReducer.photo);
  const dispatch = useDispatch();


  const handleImageChange = (e) => {
    setImageInput(e.target.value)
    let reader = new FileReader()
    let file = e.target.files[0]
    console.log('file', file)
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImageBase64(reader.result)
      }
    }
  }

  const onSendMessage = async () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      userPhoto,
      text: messageValue,
      img: imageBase64
    });
    // await axios.post('/room', {
    //   userName,
    //   userPhoto,
    //   text: messageValue,
    //   img: imageBase64
    // } )
    console.log(imageBase64)
    dispatch(newMessage(userName, userPhoto, messageValue, imageBase64))
    setMessageValue('')
    setImageInput('')
    setImageBase64('')
  }
  return (
    <div className='chat-sendingMessage'>
      <form  className='sendingMessage-form'>
        <textarea 
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)} className='sendingMessage-form__input'/>
        <div  className='sendingMessage-form__control'>
          <label className='sendingMessage-form__fileUpload'>
            <input value={imageInput} onChange={handleImageChange} type="file"/>
            Custom Upload
          </label>
          <button  
            onClick={onSendMessage} className='sendingMessage-form__btn' type='button'
          >
            Отправить
          </button>
        </div>
        
        
      </form>
      </div>
  )
}

export default SendingMessage