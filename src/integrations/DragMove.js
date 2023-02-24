import Chessboard from "chessboardjsx";

function onDragMove (newLocation, oldLocation, source,
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
