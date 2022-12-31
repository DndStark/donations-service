import React from "react";
import NavMenu from './Pieces/NavMenu';
import axios from "axios";
import { useEffect } from "react";
const Home = () => {

    const getList = () => {
        axios
          .get("/api/personas/")
          .then((res) => {
            console.log("Exito ", res.data);
          })
          .catch((err) => console.log("Error ", err));
      };

    useEffect(() => {
        app.auth().onAuthStateChanged((usuarioFirebase) => {
          getList();
        });
    }, []);

    return<div>
        <NavMenu/>
    </div>

}

export default Home;