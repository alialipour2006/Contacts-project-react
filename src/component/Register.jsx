import React from "react";
import "./style-PC.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" >
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>


                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" placeholder="Email" className="form-control form-control-lg" />
                                        </div>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" placeholder="Password" className="form-control form-control-lg" />
                                        </div>


                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 mt-2" type="submit">Register</button>

                                    </div>

                                    <div>
                                        <p className=""> <Link to="/login" className="text-white-50 fw-bold">Login</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}