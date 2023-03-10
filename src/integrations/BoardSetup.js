import React, {useState} from "react";
import Chessboard from "chessboardjsx";
//import onDragMove from "./DragMove";
import Chess  from 'chess.js' 
//import RestButton from "./ResetButton";
import  'jquery';


function BoardSetup() {
    //const chess = new Chess();
    //const fenString = chess.fen();
    //console.log(fenString);
    //const [fen, setFen] = useState(fenString);

   
      const [fen, setFen] = useState("4k3/8/8/8/8/8/8/4K3 w - - 0 1");
      console.log(fen);
    
      const handleReset = () => {
        setFen("8/8/8/8/8/8/8/8 w - - 0 1");
      } 

      /* const handleDrop = ({ sourceSquare, targetSquare }) => {
        // create a new Chess.js instance using the current FEN string
        const chess = new Chess(fen);
        console.log(chess.fen());
    
        // make the move on the chessboard
        const move = chess.move({
          from: sourceSquare,
          to: targetSquare,
        });
    
        // update the FEN string with the new position
        if (move !== null) {
          setFen(chess.fen());
          console.log(chess.fen());
        }
      };
     */
   
    /* // to handle drag and drop events
  const handleDrop = (sourceSquare, targetSquare)=> {
     // update the fen string when a move is made
     setFen(Chessboard.getFen());
  } */
   /*  function onDrop(sourceSquare, targetSquare, piece) {
        const newPosition = Chessboard.getPosition();
        newPosition[sourceSquare] = null;
        newPosition[targetSquare] = piece;
        setFen(Chessboard.objToFen(newPosition)); 
        
    } */
/*   function onDragMove (newLocation, oldLocation, source,
    piece, position, orientation) {
    console.log('New location: ' + newLocation)
    console.log('Old location: ' + oldLocation)
    console.log('Source: ' + source)
    console.log('Piece: ' + piece)
    console.log('Position: ' + Chessboard.objToFen(position))
    setFen(Chessboard.objToFen(position))
    console.log('Orientation: ' + orientation)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

    
} */
    
  return (
    <div>
      <Chessboard 
        id="standard"
        width={400}
        position={fen}
        sparePieces={true}
        dropOffBoard="trash"
        showNotation={true}  
        onClick={handleReset}
        //onDrop={({ sourceSquare, targetSquare }) =>handleDrop(sourceSquare, targetSquare)} 
        //onDragMove={onDragMove}
        //onDrop={handleDrop}
      />
      <button onClick={handleReset}>Reset</button> 
      <p>FEN: {fen}</p>
      
    </div>
  );
   
}

export default BoardSetup; 




/* const [position, setPosition] = useState("empty");


function handleMove({ sourceSquare, targetSquare }) {
    // update the position state with the new position
    setPosition((prevPosition) =>
      Chessboard.ungulate(prevPosition, sourceSquare, targetSquare)
    );
  } 
  
  
  
  function handleMove(move) {
      const chess = new Chess(fen);
      const result = chess.move(move);
  
      if (result !== null) {
        setFen(chess.fen());
      }
    }
    
    // const [fen, setFen] = useState(fenString);
    const [position, setPosition] = useState(Chessboard.getPosition());

// function to handle drag and drop events
  function handleDrop(sourceSquare, targetSquare) {
    const chess = new Chess(position);
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    setPosition(chess.fen()); // update the position
  }



  // const chess = new Chess();
 /*  return (
    <div>
        <Chessboard
            id="standard"
            width={400}
            position='empty'
            sparePieces={true}
            dropOffBoard="trash"
            showNotation={true} 
            onDrop={(move) => {
                // Make the move on the chess object
                Chess.move(move);
        
                // Get the new FEN string for the current position
                const currentFen = Chess.fen();
        
                // Do something with the new FEN string
                console.log(currentFen);
            }}
        />
    </div>  
    ); */
    

