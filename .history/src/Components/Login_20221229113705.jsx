import React from "react";
import Badge from 'react-bootstrap/Badge';
import {app} from "../fb"

const Login = (props) => {

    const submitHandler = (e) => {
        const email = document.getElementById("mail").value;
        const pass = document.getElementById("pass").value;

        app.auth().signInWithEmailAndPassword(email, pass).then((firebaseUser) => {
            console.log(firebaseUser)
            props.setUsuario(firebaseUser);
        })
       .catch((error) => {
            console.log("Error");
       });
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
            
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://chicanoticias.com/wp-content/uploads/2020/03/espana-lidera-las-donaciones-privadas-a-los-bancos-de-alimentos-en-europa.jpg"
                    className="img-fluid" alt="Donaciones"></img>
                </div>
                
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <h1 className="bg-light">Software Dodona</h1>
                    <hr></hr>
                    
                    <div >
                        <div className="form-outline mb-4">
                            <label
                                htmlFor="email"
                                className="form-label text-warning">
                                <h3 className="font-weight-bold">Correo</h3>
                            </label>
                            <input 
                                type="email"
                                name="email"
                                id="mail"
                                className="form-control form-control-lg border border-warning"
                                placeholder="correo@gmail.com"
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label
                                htmlFor="password"
                                className="form-label text-warning"
                            >
                               <h3 className="font-weight-bol">Correo</h3>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                className="form-control form-control-lg border border-warning   "
                                placeholder="***"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button onClick={submitHandler}
                                className="btn btn-primary d-grid gap-2 col-6 mx-auto btn-lg " >

                                Ingresar
                            </button>
                        </div>

                        <br></br>

                        <div className="flex items-center justify-between">
                        <button
                            className="btn btn-danger d-grid gap-2 col-6 mx-auto btn-lg"
                        >
                            Google login
                        </button>
                        </div>
                        <br></br>
                        <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#!"
                        >
                        ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Login;