import { useState } from "react";
import Attack from "./components/Attack";
import Defense from "./components/Defense";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import Header from "./components/Header";
import Page from "./components/page";

function App() {
  const [attComp, setAttComp] = useState(false);
  const [defComp, setDefComp] = useState(false);
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Page />
      </main>
      <h1>Hello to my War Simulator!</h1>
      <Account />
      <Register />
      <Login />
      {attComp && <Attack />}
      {defComp && <Defense />}
      <button onClick={() => setAttComp(true)}>Attack</button>
      <button onClick={() => setDefComp(true)}>Defense</button>
    </div>
  );
}

export default App;
