import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button
        className="game-init"
        onClick={() => console.log("Game started!")}
      >
        Start new Game
      </button>
    </div>
  );
}

export default App;
