import React from "react";
import Chessboard from "chessboardjsx";
import onDragMove from "./DragMove";

function BoardSetup() {
    return (
        <Chessboard
            id="standard"
            width={400}
            position="start"
            sparePieces={true}
            dropOffBoard="trash"
            showNotation={true}
            
        />      
    );
}

export default BoardSetup;
