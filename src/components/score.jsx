import React from "react";

export default  function scoreBoard({score, bestScore}){

    return <div className="scoreDiv flex secondaryContainer">
        <h3 className="score">Score: {score}</h3>
        <h3 className="bestScore">Best Score: {bestScore}</h3>
    </div>

}