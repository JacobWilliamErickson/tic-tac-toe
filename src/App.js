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

 const checkForWinner=(squares)=>{ 
  if((squares[0]==='X'&&squares[1]==='X'&&squares[2]==='X')||(squares[3]==='X'&&squares[4]==='X'&&squares[5]==='X')||
 (squares[6]==='X'&&squares[7]==='X'&&squares[8]==='X')){
  setWinner({title: "Hack Bright Wins",
    message: "Wins by Horizontal",})
    setSquares(["", "", "", "", "", "", "", "", ""])
    return;
 }

 if((squares[0]==='O'&&squares[1]==='O'&&squares[2]==='O')||(squares[3]==='O'&&squares[4]==='O'&&squares[5]==='O')||
 (squares[6]==='O'&&squares[7]==='O'&&squares[8]==='O')){
  setWinner({title: "Dev-Mountain Wins",
    message: "Wins by Horizontal",})
    setSquares(["", "", "", "", "", "", "", "", ""])
    return;
 }

 if((squares[0]==='X'&&squares[3]==='X'&&squares[6]==='X')||(squares[1]==='X'&&squares[4]==='X'&&squares[7]==='X')||
 (squares[2]==='X'&&squares[5]==='X'&&squares[8]==='X')){
  setWinner({title: "Hack Bright Wins",
    message: "Wins by Vertical",})
    setSquares(["", "", "", "", "", "", "", "", ""])
    return;
 }

 if((squares[0]==='O'&&squares[3]==='O'&&squares[6]==='O')||(squares[1]==='O'&&squares[4]==='O'&&squares[7]==='O')||
 (squares[2]==='O'&&squares[5]==='O'&&squares[8]==='O')){
  setWinner({title: "Dev-Mountain Wins",
    message: "Wins by Vertical",})
    setSquares(["", "", "", "", "", "", "", "", ""])
    return;
 }

 if((squares[0]==='X'&&squares[4]==='X'&&squares[8]==='X')||(squares[2]==='X'&&squares[4]==='X'&&squares[6]==='X')){
  setWinner({title: "Hack Bright Wins",
    message: "Wins by Diagonal",})
    setSquares(["", "", "", "", "", "", "", "", ""])
    return;
 }

 if((squares[0]==='O'&&squares[4]==='O'&&squares[8]==='O')||(squares[2]==='O'&&squares[4]==='O'&&squares[6]==='O')){
  setWinner({title: "Dev-Mountain Wins",
    message: "Wins by Diagonal",})
    setSquares(["", "", "", "", "", "", "", "", ""])
    return;
 }}

 const getPlayerHandler = () =>{
  
}

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      {player && <h2 className="hack">HackBright its your turn!</h2>}
      {!player && <h2 className="dev">DevMountain its your turn!</h2>}
      {winner &&<WinnerModal
      onOkay = {newGameHandler} 
      title={winner.title}
      message={winner.message} />}
      <span>{checkForWinner(squares)}</span>
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
            ></Square>
          );
        })}
      </div>
      <Button onClick={handleClick}>Reset</Button>
    </div>
  );
}

export default App;
