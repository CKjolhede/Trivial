import React, {useState} from "react";

function QuestionCard({ 
    question,
    startNewTurn 
}) {
    const [questionStatus, setQuestionStatus] = useState("unanswered");

    function handleCorrectAnswer() {
        setQuestionStatus("correct");
        // update score of currentPlayer
        // stretch goal: after 3 seconds, startNewTurn()
    }

    function handleIncorrectAnswer() {
        setQuestionStatus("incorrect");
        // stretch goal: after 5 seconds, startNewTurn()
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
            return (
                <div>
                    <h3>Correct!</h3>
                    <button onClick={startNewTurn}>Next</button>
                </div>
            )
        case "incorrect":
            return (
                <div>
                    <h3>Incorrect!</h3>
                    <h4>{question.text}</h4>
                    <p>Correct Answer: {question.correctAnswer}</p>
                    <button onClick={startNewTurn}>Next</button>
                </div>
            )
    }
}

export default QuestionCard;