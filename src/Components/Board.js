import "../App.css";
import Square from "../Components/Square";

import Confetti from 'react-confetti';

function Board({squares, onPlay, isNext, player1Props, player2Props}) {
  console.log(player1Props, player2Props , "palyers")
  
//Display winner
const winner = calculateWinner(squares);

let status;

if (winner) {
  status = (
    <div className="winner-status">
      <Confetti />
      <div>Winner: {winner}</div>
    </div>
  );
} else {
  status = "Next player: " + (isNext ?  player1Props : player2Props);
}


  function handleClick(index) {
    if(squares[index] || calculateWinner(squares)){
      return
    }
    const nextSquares = [...squares];
 
    if(isNext){
      nextSquares[index]= "X"
    }else{
      nextSquares[index]= "O"
    }
    
    onPlay(nextSquares)
    console.log(nextSquares, "clicked");
  }




  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] &&
         squares[a] === squares[b] && 
         squares[a] === squares[c]) {
        // Check if the winner is "X" or "O" and return the corresponding player's name
      return squares[a] === "X" ? player1Props : player2Props;
      }
    }
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
