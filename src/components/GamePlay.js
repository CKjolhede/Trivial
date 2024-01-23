import QuestionCard from "./QuestionCard";
import ResponseCard from "./ResponseCard";
import Scoreboard from "./Scoreboard";

function GamePlay() {
    // state: currentPlayer
    
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
            <Scoreboard />
            <QuestionCard question={sampleQuestion} />
            <ResponseCard />
        </div>
    )
}

export default GamePlay;