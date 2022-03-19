import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { photoLoad } from '../redux/actions'

const JoinBlock = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(photoLoad())
  }, [])

  const photo = useSelector(state => {
    return state.photoReducer.photo
  })

  console.log('photo >', photo)

  return (
    <div className='joinBlock'>
      <h1 className='joinBlock__header'>Добро пожаловать в чат-флудилку!</h1>
      <img  className='joinBlock__logo' src={photo}/>
      {/* <img  className='joinBlock__logo' src='chat.png'/> */}
      <button className='joinBlock__button'>Войти</button>
    </div>
  )
}

export default JoinBlock