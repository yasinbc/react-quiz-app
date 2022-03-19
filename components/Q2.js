import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const Q2 = () => {
    const [score, setScore] = React.useState(() => 0)
    
    const scoreCounter = () => {
        setScore(
            score + 1
        )
        console.log(`add ${score}`)
    }
    return(
        <Route path="/Q2">
            <div className="mt-5 mb-5">
                <h1 className="text-center">Calculate the output</h1>
                <h2 className="text-center">console.log(PI * PI)</h2>
                <Link onClick={scoreCounter} to="/Q3" className="btn btn-primary btn-lg btn-block">{Math.PI * Math.PI}</Link>
                <Link className="btn btn-primary btn-lg btn-block">{Math.SQRT1_2}</Link>
                <Link className="btn btn-primary btn-lg btn-block">{Math.LN2}</Link>
                <Link onClick={scoreCounter} to="/Q3" className="btn btn-primary btn-lg btn-block">π<sup>2</sup></Link>
            </div>
        </Route>
    )
}

export default Q2