import React from 'react';
import '../App.css';
import {useNavigate} from "react-router-dom";


const Connection = () =>{
    let navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const routeChange = () =>{
        let path = `/`;
        navigate(path);
    }
    return(
<>
    <div className="container-fluid">
        <div className="row align-items-center justify-content-center d-flex" >
            <div >
                <h1 className="text-dark">You are connected </h1>
            </div>
            <div >
                <button className="btn bg-primary one input100 mt-5 mb-4 text-light text-uppercase" > Log Out </button>
            </div>
        </div>
    </div>
</>
    );
};
export default Connection;