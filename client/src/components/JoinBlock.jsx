import React from 'react'

const JoinBlock = () => {
  return (
    <div className='joinBlock'>
      <h1 className='joinBlock__header'>Добро пожаловать в чат-флудилку!</h1>
      <img  className='joinBlock__logo' src='chat.png'/>
      <button className='joinBlock__button'>Войти</button>
    </div>
  )
}

export default JoinBlock