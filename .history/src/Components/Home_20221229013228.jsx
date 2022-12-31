import React, { Component } from "react";
import Footer from './Pieces/Footer';
import { app } from "../fb";

const Home = () => {

    const logout = () => {
        app.auth().signOut();
    }

    return<div>
        <Footer/>
        Hola, hola y hola
        <button onClick={logout}>Cerrar sesión</button>
    </div>

}

export default Home;