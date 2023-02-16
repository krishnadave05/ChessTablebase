import './App.css';
import Chessboard from "chessboardjsx";
import Sidebar from './sidebar';


function App() {
  return (
    <div className="row">
      <div className="column">
        <Chessboard
          width={400}
          position="start"
        />
      </div>
      <div className="column">
        <Sidebar/>
        </div>
    </div>
  );
}

export default App;
