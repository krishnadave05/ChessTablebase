import './App.css';
import React, { useState} from 'react';
import Chessboard from "chessboardjsx";

function App() {
  const [turn, setTurn] = useState('w');
  const [position, setPosition] = useState('start');
  const [activeButton, setActiveButton] = useState(null);

  const toggleTurn = () => {
    setTurn(turn === 'w' ? 'b': 'w');
  }
 
  const handleDrop = (source, target) => {
    // Update the state to reflect the move
    const newPosition = Chessboard.move(position, source, target);
    setPosition(newPosition);

    // Toggle the turn
    toggleTurn();
  };

  const handleButtonClick = (buttonTurn) => {
    setTurn(buttonTurn);
    setActiveButton(buttonTurn);
  }

  return (
    <div className="flex-center">
      <div className="turn-buttons">
        <button
          className={activeButton === 'w' ? 'active' : ''}
          onClick={() => handleButtonClick('w')}>
          White Turn
        </button>
        <button
          className={activeButton === 'b' ? 'active' : ''}
          onClick={() => handleButtonClick('b')}>
          Black Turn
        </button>
      </div>
      <Chessboard
        width={400}
        position={position}
        orientation={turn}
        onDrop={handleDrop}
      />
    </div>
  );
}

export default App;
