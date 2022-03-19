import React from 'react'
import {Route, Link} from 'react-router-dom'

const Q3 = () => {
    return(
        <Route path="/Q3">
            <div className="mt-5 mb-5">
                <h1 className="text-center">Choose the right answer</h1>
                <h2 className="text-center">let arr = [2, 3, 4].filter(item =&gt; item !== 3</h2>
                <Link className="btn btn-primary btn-lg btn-block">[4, 6, 8]</Link>
                <Link to="/Q4" className="btn btn-primary btn-lg btn-block">[2, 4]</Link>
                <Link className="btn btn-primary btn-lg btn-block">[3]</Link>
                <Link className="btn btn-primary btn-lg btn-block">[Object : Function]</Link>
            </div>
        </Route>
    )
}

export default Q3