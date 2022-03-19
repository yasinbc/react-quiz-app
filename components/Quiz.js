import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     // Route,
//     // Link
//     } from "react-router-dom";
// import Q1 from './Q1';
// import Q2 from './Q2';
// import Q3 from './Q3';
// import Q4 from './Q4';
// import Q5 from './Q5';
// import Ready from './Ready';
// import QuizEnd from './QuizEnd'

import OnePageQuiz from "./OnePageQuiz"



const Quiz = () => {
    return(
        <React.Fragment>
            <OnePageQuiz/>
{/*             
            <Router>
                <Ready/>
                <Q2/>
                <Q3/>
                <Q4/>
                <Q5/>
                <QuizEnd/>
                <Switch>
                    <Q1/> 
                    <Q2/>
                    <Q3/>
                    <Q4/>
                    <Q5/>
                    <QuizEnd/>
                </Switch>
            </Router> */}
        </React.Fragment>
    )
}

export default Quiz;