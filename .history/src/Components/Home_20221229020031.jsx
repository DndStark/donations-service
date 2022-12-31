import React from "react";
import NavMenu from './Pieces/NavMenu';
import { app } from "../fb";
import { Nav } from "react-bootstrap";

const Home = () => {

    const logout = () => {
        app.auth().signOut();
    }

    return<div>
        <Nav/>
        Hola, hola y hola
        <button onClick={logout}>Cerrar sesión</button>
    </div>

}

export default Home;