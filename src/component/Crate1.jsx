import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Crate1() {


    const [NameAdd, setNameAdd] = useState('');
    const [EmailAdd, setEmailAdd] = useState('');
    const [PhoneNumberAdd, setPhoneNumberAdd] = useState('');
    const [MesName, setMesName] = useState('');
    const [MesEmail, setMesEmail] = useState('');
    const [MesPhoneNumber, setMesPhoneNumber] = useState('');


    function AddCnn() {
        axios.post(`https://661593fab8b8e32ffc7b4cc1.mockapi.io/Contacts/`, {
            Name: NameAdd,
            Email: EmailAdd,
            PhoneNumber: PhoneNumberAdd,
        }).then((response) => {
            setNameAdd('')
            setEmailAdd('')
            setPhoneNumberAdd('')
        }).catch((error) => {
            console.log(error);
        })

    }


    const navigate = useNavigate();



    function handleNameAdd(e) {
        let name = e.target.value;
        setNameAdd(name)
    }


    function handleEmailAdd(e) {
        let email = e.target.value;
        setEmailAdd(email)
    }



    function handlePhoneNumberAdd(e) {
        let phonee = e.target.value;
        setPhoneNumberAdd(phonee)
    }



    function checkSub() {
        if (PhoneNumberAdd.length < 1) {
            setMesPhoneNumber('لطفا شماره تلفن مخاطب را وارد کنید')
        } else {
            setMesPhoneNumber('')

        }
        if (EmailAdd.length < 1) {
            setMesEmail('لطفا ایمیل مخاطب را وارد کنید')
        } else {
            setMesEmail('')

        }
        if (NameAdd.length < 1) {
            setMesName('لطفا نام مخاطب را وارد کنید')
        }
        if (NameAdd.length > 1) {
            setMesName('')

        }
        if (PhoneNumberAdd.length >= 1 && NameAdd.length >= 1 && EmailAdd.length >= 1) {
            AddCnn()
            navigate(-1)
        }
    }




    return (
        <>
            <div class="main-block" >
                <form >
                    <h1 className="h1-edit">Add Contact </h1>
                    <div className="info">
                        <span className="text-mes-cer">{MesName}</span>
                        <input className="fname input-n" type="text" name="name" placeholder="Name" value={NameAdd} onChange={(e) => handleNameAdd(e)} />
                        <span className="text-mes-cer">{MesEmail}</span>
                        <input className="input-em" type="text" name="name" placeholder="Email" value={EmailAdd} onChange={(e) => handleEmailAdd(e)} />
                        <span className="text-mes-cer">{MesPhoneNumber}</span>
                        <input className="input-pn" pattern="^[0-9]" type="text" name="name" placeholder="Phone number" value={PhoneNumberAdd} onChange={(e) => handlePhoneNumberAdd(e)} />
                    </div>
                    <button type="button" onClick={() => checkSub()}>Finish</button>
                </form>
            </div >
        </>
    )
}