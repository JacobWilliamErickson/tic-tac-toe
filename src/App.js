import React, { useState } from "react";
import "./App.css";
import WinnerModal from "./components/WinnerModal";
import Square from "./components/Square"
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

 if((squares[0]==='X'&&squares[1]==='X'&&squares[2]==='X')||(squares[3]==='X'&&squares[4]==='X'&&squares[5]==='X')||
 (squares[6]==='X'&&squares[7]==='X'&&squares[8]==='X')){
  setWinner({title: "Hack Bright Wins",
    message: "Wins by Horizontal",})

    setTimeout(function() {
    }, 1000);
    handleClick()
    return;
 }

 if((squares[0]==='O'&&squares[1]==='O'&&squares[2]==='O')||(squares[3]==='O'&&squares[4]==='O'&&squares[5]==='O')||
 (squares[6]==='O'&&squares[7]==='O'&&squares[8]==='O')){
  setWinner({title: "Dev-Mountain Wins",
    message: "Wins by Horizontal",})

    setTimeout(function() {
    }, 1000);
    handleClick()
    return;
 }

 if((squares[0]==='X'&&squares[3]==='X'&&squares[6]==='X')||(squares[1]==='X'&&squares[4]==='X'&&squares[7]==='X')||
 (squares[2]==='X'&&squares[5]==='X'&&squares[8]==='X')){
  setWinner({title: "Hack Bright Wins",
    message: "Wins by Vertical",})

    setTimeout(function() {
    }, 1000);
    handleClick()
    return;
 }

 if((squares[0]==='O'&&squares[3]==='O'&&squares[6]==='O')||(squares[1]==='O'&&squares[4]==='O'&&squares[7]==='O')||
 (squares[2]==='O'&&squares[5]==='O'&&squares[8]==='O')){
  setWinner({title: "Dev-Mountain Wins",
    message: "Wins by Vertical",})

    setTimeout(function() {
    }, 1000);
    handleClick()
    return;
 }

 if((squares[0]==='X'&&squares[4]==='X'&&squares[8]==='X')){
  setWinner({title: "Hack Bright Wins",
    message: "Wins by Diagonal",})

    setTimeout(function() {
    }, 1000);
    handleClick()
    return;
 }

 if((squares[0]==='O'&&squares[4]==='O'&&squares[8]==='O')){
  setWinner({title: "Dev-Mountain Wins",
    message: "Wins by Diagonal",})

    setTimeout(function() {
    }, 1000);
    handleClick()
    return;
 }







  return (
    <div className="App">
      {winner &&<WinnerModal
      onOkay = {newGameHandler} 
      title={winner.title}
      message={winner.message} />}
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
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
