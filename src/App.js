import React, { useState } from "react";
import "./App.css";
import WinnerModal from "./components/WinnerModal";
import Square from "./components/Square"
import Button from "./UI/Button";
function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState();

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)}


  const newGameHandler = () =>{
    setWinner(null)
    setPlayer(true)
  }

 


  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      {player && <h2 className="hack">HackBright its your turn!</h2>}
      {!player && <h2 className="dev">DevMountain its your turn!</h2>}
      {winner &&<WinnerModal
      onOkay = {newGameHandler} 
      title={winner.title}
      message={winner.message}
      winnerCheck = {setWinner}
      squares={squares}
      setSquares={setSquares} />}
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              setSquares={setSquares}
              index={index}
              squareValue={val}
              squares={squares}
              player={player}
              setPlayer={setPlayer}
              setWinner = {setWinner}
            ></Square>
          );
        })}
      </div>
      <Button onClick={handleClick}
      >Reset</Button>
    </div>
  );
}

export default App;
