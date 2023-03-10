import React, { useState } from "react";
import Chessboard from "chessboardjsx";

function ResetButton() {
  const [fen, setFen] = useState("start");

  const handleReset = () => {
    setFen("start");
  };

  return (
    <div>
      <Chessboard position={fen} 
      sparePieces={true}
      dropOffBoard="trash"
      showNotation={true}  />
      <button onClick={handleReset}>Reset</button>
      <p>FEN: {fen}</p>
    </div>
  );
}

export default ResetButton;






