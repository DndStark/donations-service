import React from "react";
import NavMenu from './Pieces/NavMenu';
import axios from "axios";

const Home = () => {

    axios.get("/api/todos/")
    
    return<div>
        <NavMenu/>
    </div>

}

export default Home;