import React from 'react'
import {
    BrowserRouter as Router,
    Link
    } from "react-router-dom";
    
const Ready = () => {
    return(
        <React.Fragment>
                <h1 className="text-center" style={{fontSize:"4rem"}}>Are you ready?</h1>
                <div className="btn-group btn-lg btn-block ">
                    <Link to="/Q1" className="btn btn-success " style={{fontSize:"2rem"}}>I was born for this!</Link>
                </div>
                <div className="btn-group btn-lg btn-block">
                    <Link to="/" type="button" className="btn btn-danger" style={{fontSize:"2rem"}}>No</Link>
                </div>
        </React.Fragment>
    )
}

export default Ready;