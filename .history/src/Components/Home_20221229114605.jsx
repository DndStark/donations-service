import React from "react";
import NavMenu from './Pieces/NavMenu';

const Home = () => {

    return<div>
        <NavMenu/>
        <button onClick={logout}>Cerrar sesión</button>
    </div>

}

export default Home;