import React, { Component, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import {app} from "./fb"

function App() {

  const [usuario, setUsuario] = useState(null);

  return (
    <div className="App">
      {usuario?}
    </div>
  );
}

export default App;
