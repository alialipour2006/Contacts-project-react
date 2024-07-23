import React from "react";
import { Link } from "react-router-dom";
import { useURLID } from "../hooks/useURLID";
import { useNavigate } from "react-router-dom";

export default function Pagination1({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    const navigate = useNavigate();
    function pagint(page) {
        setCurrentPage(page)
        navigate(`/contacts?page=${page}`)
    }
    return (
        <div className="pagination-me-h">
            {pages.map((page, index) => {

                return (
                    <button
                        onClick={() => pagint(page)}
                        className={page == currentPage ? 'pagination-me active-1' : 'pagination-me'}>
                        <Link className="link-page" to={`/contacts?page=${page}`} key={index}  >

                            {page}

                        </Link>
                    </button>
                )

            })}
        </div>
    )
}