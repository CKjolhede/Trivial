import React, {useState} from "react";

function Scoreboard({
    player1,
    player2
}) {
    return (
        <div>
            <h2>Player 1</h2>
            <h3>{player1.score}</h3>
            <h2>Player 2</h2>
            <h3>{player2.score}</h3>
        </div>
    )
}

export default Scoreboard;