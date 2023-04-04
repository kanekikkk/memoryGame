import React, {useState} from "react";
import Body from "./body.jsx";
import ScoreBoard from "./score.jsx";
import  './style.css';

export default function App(){

    const [score, setScore] = useState(0);
    const [bestScore, setbestScore] = useState(localStorage.getItem('bestScore'));

    function handleGameOver(){
        if(score > bestScore){
            localStorage.setItem('bestScore', score);
            setbestScore(score);
        }
        setScore(0);
        location.reload();
    }
    function handleScoreIncrease(){
        setScore(score + 1);
    }
    return <div>
        <ScoreBoard score={score} bestScore={bestScore} />
        <Body gameOver={handleGameOver} increase={handleScoreIncrease} />
    </div>
}