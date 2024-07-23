import React, { useEffect, useState } from "react";
import "./style-PC.css"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default function Login() {

    const [NumberOwner, setNumberOwner] = useState('')
    const [Password, setPassword] = useState('')

    const [ErorNumberOwner, setErorNumberOwner] = useState(false)
    const [ErorPassword, setErorPassword] = useState(false)

    const [MessageErorNumberOwner, setMessageErorNumberOwner] = useState('')
    const [MessageErorPassword, setMessageErorPassword] = useState('')

    const [MessagePage, setMessagePage] = useState('')
    useEffect(() => {
        chekinglogin()
    }, [Password])

    function chekinglogin() {
        axios.get(`https://661593fab8b8e32ffc7b4cc1.mockapi.io/Contacts?NumberOwner=${NumberOwner}`)
            .then(response => response.data)
            .then(data => {
                console.log(data.NumberOwner);
                if (data.NumberOwner == NumberOwner) {
                    setErorNumberOwner(true)
                    setErorPassword(true)
                    setMessagePage(` کاربر گرامی به سایت فلان خوش امدید${data.NameOwner} `)
                    alert(` کاربر گرامی به سایت فلان خوش امدید${data.NameOwner} `)

                } else {
                    if (!NumberOwner.length) {
                        setErorNumberOwner(false)
                        setMessageErorNumberOwner('لطفا شماره  خود را وارد کنید')
                    }
                    setErorNumberOwner(false)
                    setMessageErorNumberOwner('شماره تلفن همراه شما قبلا ثبت نام نشده ')
                }
            }).catch(() => {
                console.log("ssds");
            })
    }
    function handelpass(e) {
        setPassword(e.target.value)
    }
    function handelnumm(e) {
        setNumberOwner(e.target.value)
    }

    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" >
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>


                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input value={NumberOwner} onChange={(e) => { handelnumm(e) }} type="email" id="typeEmailX" placeholder="Email" className="form-control form-control-lg" />
                                        </div>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input value={Password} onChange={(e) => { handelpass(e) }} type="password" id="typePasswordX" placeholder="Password" className="form-control form-control-lg" />
                                        </div>


                                        <button onClick={chekinglogin} data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 mt-2" type="submit">Login</button>

                                    </div>

                                    <div>
                                        <p className=""> <Link to="/register" className="text-white-50 fw-bold">Register</Link>
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