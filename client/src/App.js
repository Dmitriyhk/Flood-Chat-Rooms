import { useEffect } from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import JoinBlock from "./components/JoinBlock"
import Spin from "./components/Spin";
import socket from "./socket"

const App = () => {

  useEffect(() => {
    socket.on('USER:JOINED', name => {
      console.log(name)
      console.log( 'Пользователь ' + name[name.length - 1].name + ' зашёл к нам!')
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