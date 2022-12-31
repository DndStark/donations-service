import React from "react";
import NavMenu from './Pieces/NavMenu';
import { app } from "../fb";

const Home = () => {

    const logout = () => {
        app.auth().signOut();
    }

    return<div>
        <NavMenu/>
        Hola, hola y hola
        <button onClick={logout}>Cerrar sesión</button>
    </div>

}

export default Home;