import React from 'react'
import questionsObj from './questionsObj'

const OnePageQuiz = () => {

    const questions = questionsObj;
    
    const num = () =>{
        return 0
    }

    const booleanScore = () =>{
        return false
    }
    
    const [currentQuestion, setCurrentQuestion] = React.useState(() => num())

    const [showScore, setShowScore] = React.useState(() => booleanScore())
    
    const [score, setScore] = React.useState(() => 0)
    
    const handleAnswerButtonClick = (isCorrect) =>{
        if(isCorrect === true){ 
            setScore(score + 1)
        }
        
        const nextQuestion = currentQuestion + 1
        return nextQuestion < questions.length ? setCurrentQuestion(nextQuestion) : setShowScore(true)
    }
    
    return(
        <div className="container">
            {
                showScore ? (
                    <div className="score-section">
                        <h1>You scored {score} out of {questions.length}</h1>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="question-section">
                            <div className="question-count">
                                <h1>Question {currentQuestion + 1}/{questions.length}</h1>
                            </div>
                            <h2 className="question-text">{questions[currentQuestion].questionText}</h2>
                        </div>
                        <div>
                            <div className="answer-section">
                                {questions[currentQuestion].answerOptions.map(anwerOption => <button onClick={() => handleAnswerButtonClick(anwerOption.isCorrect)} className="btn btn-primary btn-lg btn-block">{anwerOption.answerText}</button>)}
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default OnePageQuiz