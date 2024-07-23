import { useEffect, useState } from "react";
import "./style-PC.css"
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Loding from "./Loding";
import Contss from "./Contss";
import Pagination1 from "./Pagination1";
import { useURLID } from "../hooks/useURLID";


export default function Home() {


    const [Lodi, setLodi] = useState(false);
    const [aliali, setAliali] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);


    async function getUser() {
        try {
            setLodi(true)

            const response = await axios.get('https://661593fab8b8e32ffc7b4cc1.mockapi.io/Contacts');
            const alll = response.data
            setAliali(alll)
            setLodi(false)

        } catch (error) {
            console.error(error);
        }
    }

    const location = useLocation();
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const Items = aliali.slice(firstPostIndex, lastPostIndex)
    const { id } = useURLID();


    useEffect(() => {
        setTimeout(() => {
            getUser()
        }, 1000)
        getUser()
        if (id == undefined) {
            setCurrentPage(1)

        } else {
            setCurrentPage(id)
        }
    }, [])



    function deleteCC(id) {
        console.log(id);
        setLodi(true)
        axios.delete(`https://661593fab8b8e32ffc7b4cc1.mockapi.io/Contacts/${id}`).then((response) => {
            getUser()
            setLodi(false)
        }).catch((error) => {
            console.log(error);
        })
    }



    function notpage() {
        let pages11 = [];
        for (let i = 1; i <= Math.ceil(aliali.length / postsPerPage); i++) {
            pages11.push(i);
        }
        if (pages11.length < id) {
            return (
                <h2 className="message-var">این صفحه وجود ندارد لطفا برگردید به صفحه های قبلی</h2>
            )
        }
    }



    return (
        <>
            {Lodi && <Loding />}
            {notpage()}
            {Items && <Contss
                Items={Items}
                delete1={deleteCC}
            />
            }
            <Pagination1
                totalPosts={aliali.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            {Items && <Link to={'/crate'}><span className="btn-addd ">+</span></Link>}
        </>
    )
}