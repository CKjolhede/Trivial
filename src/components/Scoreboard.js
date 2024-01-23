import React, {useState} from "react";

function Scoreboard({
    player1,
    player2
}) {
    return (
        <div>
            <h2>{player1.name}</h2>
            <h3>{player1.score}</h3>
            <h2>{player2.name}</h2>
            <h3>{player2.score}</h3>
        </div>
    )
}

export default Scoreboard;