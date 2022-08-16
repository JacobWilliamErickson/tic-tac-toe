import React,{useState} from 'react';
import './App.css';
import Square from './Square';
function App() {
  const fruit = 'pineapple'
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
 const [player, setPlayer] = useState(true);
  return (
    <div className="App">
      <Square squares={squares}
    setSquares={setSquares}
    player={player}
    setPlayer={setPlayer}></Square>
      
    </div>
  );
}

export default App;
