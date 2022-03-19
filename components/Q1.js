import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react'

const Q1 = () => {   
    const initialCount = () => {
        return false
    }
    
    const [score, setScore] = React.useState(() => initialCount())
    
    const scoreCounter = () => {
        setScore(sum1 => sum1.score + 1)
        console.log(`add ${score}`)
    }
    return (
        <Route path="/Q1" exact>
            <div className="mt-5 mb-5">
                <h1 className="text-center">Complete the sence</h1>
                <h2 className="text-center">JavaScript is...</h2>
                <Link className="btn btn-primary btn-lg btn-block">...a Java framework</Link>
                <Link className="btn btn-primary btn-lg btn-block">...a TypeScript library</Link>
                <Link onClick={scoreCounter} to="/Q2" className="btn btn-primary btn-lg btn-block">...a Scripting language</Link>
                <Link className="btn btn-primary btn-lg btn-block">...a Jabba Hutt son's</Link>
            </div>
        </Route>
    )
}

export default Q1;
