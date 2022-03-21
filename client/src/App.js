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

  const test1 = useSelector(state => {
    return state.appReducer.join;
  });
  console.log('test >', test)
  return (
    <div>
      {test ? <Spin /> : test1 ?<Chat /> : <JoinBlock />}
      
    </div>
  )
} 

export default App