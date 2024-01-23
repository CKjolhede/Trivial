import React, {useState} from "react";

function QuestionCard( {question} ) {
    const [questionStatus, setQuestionStatus] = useState("unanswered");

    function handleCorrectAnswer() {
        setQuestionStatus("correct");
        // update score of currentPlayer
        // after 3 seconds, startNewTurn()
            // toggle currentPLayer
            // reset currentQuestion
    }

    function handleIncorrectAnswer() {
        setQuestionStatus("incorrect");
        // after 5 seconds, startNewTurn()
            // toggle currentPlayer()
            // reset currentQuestion
    }
    
    function handleSelection(selection) {
        (question[selection] === question.correctAnswer) ? 
            handleCorrectAnswer() : 
            handleIncorrectAnswer() ;
    }
    
    switch(questionStatus) {
        case "unanswered":
            return (
                <div>
                    <h3>{question.text}</h3>
                    <p onClick={() => handleSelection("a")}>{question.a}</p>
                    <p onClick={() => handleSelection("b")}>{question.b}</p>
                    <p onClick={() => handleSelection("c")}>{question.c}</p>
                    <p onClick={() => handleSelection("d")}>{question.d}</p>
                </div>
            )
        case "correct":
            return <h3>Correct!</h3>
        case "incorrect":
            return (
                <div>
                    <h3>Incorrect!</h3>
                    <h4>{question.text}</h4>
                    <p>Correct Answer: {question.correctAnswer}</p>
                </div>
            )
    }
}

export default QuestionCard;