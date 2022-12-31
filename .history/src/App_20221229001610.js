import React, { useState, useEffect }  from 'react';
import "bootstrap/dist/css/bootstrap.css"
import {app} from "./fb"
import Home from "./Components/Home"
import Login from "./Components/Login"
import './App.css';


function App() {

  const [usuario, setUsuario] = useState(null);

  useEffect();

  return (
    <div className="App">
      {usuario? <Home/>: <Login setUsuario/>}
    </div>
  );
}

export default App;
