import { useState } from "react";

function Square({value, onSquareClick}) {
 
  return (
    <div>
      
        <div className="square" onClick={onSquareClick}>
      <p>{value}</p>
    </div>
    </div>
   
  );
}

export default Square;
