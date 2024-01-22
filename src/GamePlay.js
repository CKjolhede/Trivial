import QuestionCard from "./QuestionCard";
import ResponseCard from "./ResponseCard";
import Scoreboard from "./Scoreboard";

function GamePlay() {
    return (
        <div>
            <h1>GamePlay rendered!</h1>
            <Scoreboard />
            <QuestionCard />
            <ResponseCard />
        </div>
    )
}

export default GamePlay;