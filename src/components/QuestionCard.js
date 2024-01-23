import React, {useState} from "react";

function QuestionCard( {question} ) {
    const [questionStatus, setQuestionStatus] = useState("unanswered");

    function handleSelection(selection) {
        (question[selection] === question.correctAnswer) ? 
            setQuestionStatus("correct") : 
            setQuestionStatus("incorrect")
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
                    <h2>{question.text}</h2>
                    <p>Correct Answer: {question.correctAnswer}</p>
                </div>
            )
    }
}

export default QuestionCard;