import React from "react";
import NavMenu from './Pieces/NavMenu';
import { app } from "../fb";

const Home = () => {

    return<div>
        <NavMenu/>
        <button onClick={logout}>Cerrar sesión</button>
    </div>

}

export default Home;