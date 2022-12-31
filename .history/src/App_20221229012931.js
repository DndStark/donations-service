import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import 'mdbreact/dist/css/mdb.css';
import {app} from "./fb"
import Home from "./Components/Home"
import Login from "./Components/Login"
import './App.css';


function App() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });
  }, []);

  return (
    <div className="App">
      {usuario? <Home/>: <Login setUsuario={setUsuario}/>}
    </div>
  );
}

export default App;
