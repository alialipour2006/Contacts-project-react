import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Loding from "./Loding";

export default function Editcon() {


    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Com, setCom] = useState(false);
    const [Id, setId] = useState('');
    const [IsLod, setIsLod] = useState(false);


    const navigate = useNavigate();
    const location = useLocation()
    const { item } = location.state



    function CloseEdit() {
        setCom(false)
    }
    function handleName(e) {
        setName(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }


    function OpenEdit(item) {
        setEmail(item.Email)
        setName(item.Name)
        setPhoneNumber(item.PhoneNumber)
        setId(item.id)
        setCom(true)
    }


    useEffect(() => {
        OpenEdit(item)
    }, [])


    var ali = {
        Name: Name,
        Email: Email,
        PhoneNumber: PhoneNumber,
    }


    function SubEdit() {
        setIsLod(true)
        axios.put(`https://661593fab8b8e32ffc7b4cc1.mockapi.io/Contacts/${Id}`, ali).then((response) => {
            navigate(-1)
            setIsLod(false)
        }).catch((error) => {
            console.log(error);
        })
        setCom(false)
    }



    return (
        <>
            {IsLod && <Loding />}
            <div class="main-block">
                <form action="/">
                    <h1 className="h1-edit">Edit Contact </h1>
                    <div className="info">
                        <input className="fname input-n" type="text" name="name" placeholder="Name" value={Name} onChange={(e) => handleName(e)} />
                        <input className="input-em" type="text" name="name" placeholder="Email" value={Email} onChange={(e) => handleEmail(e)} />
                        <input className="input-pn" type="text" name="name" placeholder="Phone number" value={PhoneNumber} onChange={(e) => handlePhoneNumber(e)} />
                    </div>
                    <button type="button" onClick={() => SubEdit()} >Finish</button>
                </form>
            </div>
        </>
    )
}