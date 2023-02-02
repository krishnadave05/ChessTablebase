import './App.css';
import Chessboard from "chessboardjsx";


function App() {
  return (
    <div className="flex-center">
      <Chessboard
        width={400}
        position="start"
      />
    </div>
  );
}

export default App;
