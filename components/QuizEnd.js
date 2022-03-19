import React from 'react'
import score from './Q2'

const Q5 = () => {
    return(
        <React.Fragment>
            <div className="mt-5 mb-5">
                <h1 className="text-center" style={{fontSize:"5rem"}}>Your Score is: {score}</h1>
            </div>
        </React.Fragment>
    )
}

export default Q5