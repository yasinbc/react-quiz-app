import React from 'react'
import {Route, Link} from 'react-router-dom'


const RestartQuiz = () =>{
    return(
        <React.Fragment>
            <div className="btn-group">
                <Link to="/Q1" className="btn btn-warning">Restart Quiz</Link>
            </div>
        </React.Fragment>
    )
}

export default RestartQuiz