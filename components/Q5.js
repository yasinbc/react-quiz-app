import React from 'react'
import {Route, Link} from 'react-router-dom'

const Q5 = () => {
    return(
        <Route path="/Q5">
            <div className="mt-5 mb-5">
                <h1 className="text-center">Choose the right answer</h1>
                <h2 className="text-center">let arr = [2, 3, 4].map(item =&gt; item &gt 2</h2>
                <Link className="btn btn-primary btn-lg btn-block">[Object : Function]</Link>
                <Link className="btn btn-primary btn-lg btn-block">[4, 6, 8]</Link>
                <Link className="btn btn-primary btn-lg btn-block">[3]</Link>
                <Link to="/QuizEnd" className="btn btn-primary btn-lg btn-block">[3, 4]</Link>
            </div>
        </Route>
    )
}

export default Q5