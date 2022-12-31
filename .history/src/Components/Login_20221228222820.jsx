import React from "react";

const Login = () => {
    return (

        <section className="vh-100">
            <div className="container py-5 h-100">
            {/* parte de imagen */}
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://www.unsa.edu.pe/wp-content/uploads/2022/09/MG_5829-1-878x426.jpg"
                    class="img-fluid" alt="Phone image"></img>
                </div>
                {/* parte de formulario */}
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h3>Laboratorio Epis</h3>
                <hr></hr>
                <form >
                    {/* Inicio de correo */}
                    <div className="form-outline mb-4">
                    <label
                        htmlFor="email"
                        className="form-label">
                        Correo
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="correo@gmail.com"
                    />
                    </div>
                    {/* Fin de correo */}

                    {/* Inicio de password */}
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
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="***"
                    />
                    </div>
                    {/* Fin de password */}

                    {/* Inicio de botones */}
                    <div className="flex items-center justify-between">
                    <button
                        className="btn btn-primary d-grid gap-2 col-6 mx-auto btn-lg "
                        type="submit"
                    >
                        <p className="my-4 text -sm flex ">
                        <Link to="#" onClick={() =>{
                            //setTimeout(handleSubmit(user.textContent, pass.textContent), 5000)
                        }}>Iniciar sesión
                        </Link>
                        </p>
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