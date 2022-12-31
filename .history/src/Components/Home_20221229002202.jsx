import React from "react";
import { app } from "../fb";

const Home = () => {

    const logout = () => {
        app.auth().signOut();
    }

    return<div>
        Hola, hola y hola
        <button onClick={logout}>Cerrar sesión</button>
    </div>

}

export default Home;