import Chessboard from "chessboardjsx";
import Chess from 'chess.js';
import $ from 'jquery';
function onDragMove(newLocation, oldLocation, source,
    piece, position, orientation) {
    console.log('New location: ' + newLocation)
    console.log('Old location: ' + oldLocation)
    console.log('Source: ' + source)
    console.log('Piece: ' + piece)
    console.log('Position: ' + Chessboard.objToFen(position))
    console.log('Orientation: ' + orientation)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}
export default onDragMove; 


/*{
   
        var game = new Chess();
     
        
    var board = Chessboard("board", {
        position: game.fen(),
        draggable: true,
        dropOffBoard: "trash",
        sparePieces: true,
        onDrop: handleMove,
      });
     
      function handleMove(source, target) {
        var move = game.move({
          from: source,
          to: target,
        });
        if (move === null) return "snapback";
        board.position(game.fen());
      }
      
      function resetBoard() {
        game.reset();
        board.position(game.fen());
      }
      return(
      $("#reset-button").on("click", resetBoard);
      
      $("#move-list").html(game.pgn());
      );}*/
