import React from 'react'
import {Route, Link} from 'react-router-dom'

const Q4 = () => {
    return(
        <Route path="/Q4">
            <div className="mt-5 mb-5">
                <h1 className="text-center">Choose the right answer</h1>
                <h2 className="text-center">let arr = [2, 3, 4].reduce(item =&gt; item * 2</h2>
                <Link className="btn btn-primary btn-lg btn-block">[Object : Function]</Link>
                <Link className="btn btn-primary btn-lg btn-block">[2, 4]</Link>
                <Link to="/Q5"  className="btn btn-primary btn-lg btn-block">[4, 6, 8]</Link>
                <Link className="btn btn-primary btn-lg btn-block">[3]</Link>
            </div>
        </Route>
    )
}

export default Q4