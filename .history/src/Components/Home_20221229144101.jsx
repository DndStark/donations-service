import React from "react";
import NavMenu from './Pieces/NavMenu';
import axios from "axios";

const Home = () => {

    const getList = () => {
        axios
          .get("/api/personas/")
          .then((res) => {
            console.log("Exito ", res.data);
          })
          .catch((err) => console.log("Error ", err));
      };

    return<div>
        <NavMenu/>
    </div>

}

export default Home;