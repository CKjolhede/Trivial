import React, {useState} from "react";

function QuestionCard( {question} ) {
    const [questionStatus, setQuestionStatus] = useState("unanswered");

    switch(questionStatus) {
        case "unanswered":
            return (
                <div>
                    <h3>{question.text}</h3>
                    <p>{question.a}</p>
                    <p>{question.b}</p>
                    <p>{question.c}</p>
                    <p>{question.d}</p>
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