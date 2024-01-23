import React, {useState} from "react";

import QuestionCard from "./QuestionCard";
import ResponseCard from "./ResponseCard";
import Scoreboard from "./Scoreboard";

// import questionsArray from "../db.json";

function GamePlay() {
    // I don't think questions array needs to be state actually; 
    // I like the idea of shuffling the questions array and then 
    // removing questions, and always pulling the first question.
    // currentQuestion can/should be state.

    // dummy variable until player info is tied in
    const player1 = {
        name: "Chris",
        score: 0
    }

    // dummy variable until player info is tied in
    const player2 = {
        name: "Kylie",
        score: 0
    }
        
    // dummy variable until db.json is tied in
    const sampleQuestion = {
        text: "Which of these dog breeds is dolichocephalic?",
        a: "Kuvasz",
        b: "Golden Retriever",
        c: "Borzoi",
        d: "French Bulldog",
        correctAnswer: "Borzoi"
    }

    const [currentPlayer, setCurrentPlayer] = useState(player1);
    // state: current question

    function startNewTurn() {
        console.log("Start New Turn")
        // toggle currentPlayer
            //(currentPlayer === "player1") ? setCurrentPlayer("player2") : setCurrentPlayer("player1");
        
        // reset currentQuestion
    }
    
    return (
        <div>
            <Scoreboard player1={player1} player2={player2} />
            <QuestionCard question={sampleQuestion} startNewTurn={startNewTurn} />
            <ResponseCard />
        </div>
    )
}

export default GamePlay;