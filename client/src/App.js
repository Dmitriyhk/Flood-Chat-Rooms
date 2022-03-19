import { useSelector } from "react-redux";
import JoinBlock from "./components/JoinBlock"
import Spin from "./components/Spin";
import socket from "./socket"

const App = () => {

  const test = useSelector(state => {
    return state.appReducer.loading;
  });
  console.log('test >', test)
  return (
    <div>
      <Spin />
      {!test ? <JoinBlock /> : <h1>Что-то про гуфа</h1>}
    </div>
  )
} 

export default App