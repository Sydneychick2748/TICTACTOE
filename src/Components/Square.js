import { useState } from "react";

function Square({value, onSquareClick}) {
 
  return (
    <div className="square" onClick={onSquareClick}>
      <p>{value}</p>
    </div>
  );
}

export default Square;
