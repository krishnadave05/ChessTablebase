import React, {useState} from "react";
import Chessboard from "chessboardjsx";
//import onDragMove from "./DragMove";
import Chess  from 'chess.js' 
//import RestButton from "./ResetButton";



function BoardSetup() {
    //Chess library instance to use the functions
    //const chess = new Chess();
    const [chess, setChessInstance]=useState(new Chess());
    
    //Setup the start point to have 2 kings in the board
    chess.load('4k3/8/8/8/8/8/8/4K3 w - - 0 1');
    const startFen = chess.fen();
    console.log("startFen", startFen);

    //To be able to change the fen string while we are moving
    const [fen, setFen] = useState(startFen); 

    //Reseting the board empty board
    const handleReset = () => {
      setFen("8/8/8/8/8/8/8/8 w - - 0 1");
    }

    //To make the move and record the new position
    const handleMove = ({ sourceSquare, targetSquare, piece}) => {
      // Make the move on the board
      chess.move({ 
        from: sourceSquare, 
        to: targetSquare,
        promotion: "q"  
      });
      chess.load(chess.fen());
      setFen(chess.fen()); 
      console.log('drop: ', piece, sourceSquare, targetSquare, 'New FEN IS: ', fen);
    }
    
    function onChange (oldPos, newPos) {
      console.log('Position changed:')
      console.log('Old position: ' + chess.objToFen(oldPos))
      console.log('New position: ' + chess.objToFen(newPos))
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      setFen(chess.fen());
      console.log('change: ', oldPos, newPos, 'New FEN IS: ', fen);
    }
    function onDragMove (newLocation, oldLocation, source,
      piece, position, orientation) {
      console.log('New location: ' + newLocation)
      console.log('Old location: ' + oldLocation)
      console.log('Source: ' + source)
      console.log('Piece: ' + piece)
      console.log('Position: ' + Chessboard.objToFen(position))
      console.log('Orientation: ' + orientation)
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      setFen(chess.fen());
      console.log('dragMove: ',newLocation, oldLocation, source, piece, position, orientation, 'New FEN IS: ', fen);
    }
    
  return (
    <div>
      <Chessboard 
        id="standard"
        width={400}
        position={fen}
        sparePieces={true}
        dropOffBoard="trash"
        showNotation={true}  
        //onDrop={({ sourceSquare, targetSquare }) =>handleDrop(sourceSquare, targetSquare)} 
        //onDragMove={onDragMove}
        onDrop={handleMove}
        //onChange={onChange}
        //onDragMove={onDragMove}
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

    
     // create a new Chess.js instance using the current FEN string
       //    generate fen string using the parameters
      //update the FEN setFen
       /*  console.log(sourceSquare);
        console.log(targetSquare);
        console.log(piece); */
// Create a new instance of the chess game with the current FEN state
   
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
    

