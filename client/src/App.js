import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./Chat";
import JoinBlock from "./components/JoinBlock"
import Spin from "./components/Spin";
import { newMessage, userLoad } from "./redux/actions";
import socket from "./socket"

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    socket.on('USER:JOINED', name => {
      console.log( 'Пользователь ' + name[name.length - 1].name + ' зашёл к нам!')
      dispatch(userLoad(name))
    })
    socket.on('ROOM:NEW_MESSAGE', messages => {
      const { userName, userPhoto, text, img } = messages
      dispatch(newMessage(userName, userPhoto, text, img))
    })
  }, [])

  const test = useSelector(state => {
    return state.appReducer.loading;
  });
  console.log('test >', test)
  return (
    <div>
      {/* <Spin /> */}
      {!test ? <JoinBlock /> : <Chat />}
    </div>
  )
} 

export default App