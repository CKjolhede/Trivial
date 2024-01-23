import React, {useState} from "react";

import QuestionCard from "./QuestionCard";
import ResponseCard from "./ResponseCard";
import Scoreboard from "./Scoreboard";

function GamePlay() {
    const player1 = {
        name: "Chris",
        score: 0
    }

    const player2 = {
        name: "Kylie",
        score: 0
    }
    
    const [currentPlayer, setCurrentPlayer] = useState(player1);
    
    const sampleQuestion = {
        text: "Which of these dog breeds is dolichocephalic?",
        a: "Kuvasz",
        b: "Golden Retriever",
        c: "Borzoi",
        d: "French Bulldog",
        correctAnswer: "Borzoi"
    }
    
    return (
        <div>
            <h1>GamePlay rendered!</h1>
            <Scoreboard player1={player1} player2={player2} />
            <QuestionCard question={sampleQuestion} />
            <ResponseCard />
        </div>
    )
}

export default GamePlay;