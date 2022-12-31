import React, { Component, useState }  from 'react';
import {app} from "./fb"
import Home from "./Components/Home"
import Login from "./Components/Login"
import './App.css';


function App() {

  const [usuario, setUsuario] = useState(null);

  return (
    <div className="App">
      {usuario? <Home/>: <Login/>}
    </div>
  );
}

export default App;
