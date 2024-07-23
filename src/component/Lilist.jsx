import { Link } from "react-router-dom";

export default function Lilist({ item, delete1 }) {
    return (
        <>

            <li li key={item.id} className="li-cintext  " >
                <div className="row div-li-cintext">
                    <div className="col-12 div-image-contex">
                        <img className="image-context" src={item.Image} />
                    </div>
                    <div className="col-12">
                        <div>
                            <span>Name: </span>
                            <span><b>{item.Name}</b></span>
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <span>PhoneNumber: </span>
                            <span><b>{item.PhoneNumber}</b></span>
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <span>Email: </span>
                            <span><b>{item.Email}</b></span>
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <span onClick={() => delete1(item.id)} className="btn btn-danger">Delete</span>
                            <Link to={'/edit'} state={{ item }}> <span className="btn btn-warning">Edit</span></Link>
                        </div>
                    </div>
                </div>
            </li >

        </>
    )
}