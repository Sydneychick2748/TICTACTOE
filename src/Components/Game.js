import Board from "../Components/Board";
import { useState } from "react";

import Form from "../Components/Form";

function Game() {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [displayNames, setDisplayNames] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", player1, player2);
    setDisplayNames(player1,player2);
   
  };

  const handlePlayerChange = function (e) {
    // Assuming you want to set player1 for "Player 1 Name" and player2 for "Player 2 Name"
    if (e.target.name === "player1") {
      setPlayer1(e.target.value);
    } else if (e.target.name === "player2") {
      setPlayer2(e.target.value);
    }
  };

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setxIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setxIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start ";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Board
            isNext={xIsNext}
            onPlay={handlePlay}
            squares={currentSquares}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
      <div className="display-names">
        <Form
          handleSubmitProps={handleSubmit}
          handlePlayerChangeProps={handlePlayerChange}
          player1Props={player1}
          player2Props={player2}
        />
        {/* i want to show the names of the players when the submit button is clicked and the handle submit is submitted */}
        <div className="names-of-players">
        {displayNames ? <p>Player One: {player1}</p> : null}
        {displayNames? <p>Player Two: {player2}</p> : null}
        </div>
        
      </div>
    </div>
  );
}

export default Game;
