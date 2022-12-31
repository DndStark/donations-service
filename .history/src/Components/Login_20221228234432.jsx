import { Alert } from "bootstrap";
import React from "react";
import {app} from "../fb"

const Login = (props) => {

    const submitHandler = (e) => {
        const email = e.target.mail.value;
        const pass = e.target.pass.value;

        app.auth().signInWithEmailAndPassword(email, pass).then((firebaseUser) {
            alert("bien");
        })
       .catch(function(error) {
            alert("mal");
       });
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
            
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://chicanoticias.com/wp-content/uploads/2020/03/espana-lidera-las-donaciones-privadas-a-los-bancos-de-alimentos-en-europa.jpg"
                    className="img-fluid" alt="Phone image"></img>
                </div>
                
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <h3>Plataforma Dodona</h3>
                    <hr></hr>
                    
                    <form onSubmit={submitHandler}>
                        <div className="form-outline mb-4">
                            <label
                                htmlFor="email"
                                className="form-label">
                                Correo
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="mail"
                                className="form-control form-control-lg"
                                placeholder="correo@gmail.com"
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label
                                htmlFor="password"
                                className="form-label"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                className="form-control form-control-lg"
                                placeholder="***"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="btn btn-primary d-grid gap-2 col-6 mx-auto btn-lg " type="submit">

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
                    </form>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Login;