import { useState } from "react"
import Attack from "./components/Attack"
import Defense from "./components/Defense"
import Login from "./components/Login"
import Register from "./components/Register"


function App() {
const [attComp, setAttComp] = useState(false) 
const [defComp, setDefComp] = useState(false) 
  return (
    <>
      <h1>Hello to my War Simulator!</h1>
      <Register/>
      <Login/>
      {attComp && <Attack/>}
      {defComp && <Defense/>}
      <button onClick={() => setAttComp(true)}>Attack</button>
      <button onClick={() => setDefComp(true)}>Defense</button>
    </>
  )
}

export default App
