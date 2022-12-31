import React from "react";
import NavMenu from './Pieces/NavMenu';
import axios from "axios";

const Home = () => {

    axios.get("/api/todos/")

    getList = () => {
        axios
          .get("/api/todos/")
          .then((res) => this.setState({ todoList: res.data }))
          .catch((err) => console.log(err));
      };

    return<div>
        <NavMenu/>
    </div>

}

export default Home;