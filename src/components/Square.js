import React from "react";
const Square = (props) => {
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  const checkForWinner = (squares) => {
    if (
      (squares[0] === "X" && squares[1] === "X" && squares[2] === "X") ||
      (squares[3] === "X" && squares[4] === "X" && squares[5] === "X") ||
      (squares[6] === "X" && squares[7] === "X" && squares[8] === "X")
    ) {
      props.setWinner({
        title: "HackBright Wins",
        message:
          "The game has ended because Hack Bright placed three logos in a Horizontal line",
      });
      props.setSquares(["", "", "", "", "", "", "", "", ""]);
      return;
    }

    if (
      (squares[0] === "O" && squares[1] === "O" && squares[2] === "O") ||
      (squares[3] === "O" && squares[4] === "O" && squares[5] === "O") ||
      (squares[6] === "O" && squares[7] === "O" && squares[8] === "O")
    ) {
      props.setWinner({
        title: "DevMountain Wins",
        message:
          "The game has ended because DevMountain placed three logos in a Horizontal line",
      });
      props.setSquares(["", "", "", "", "", "", "", "", ""]);
      return;
    }

    if (
      (squares[0] === "X" && squares[3] === "X" && squares[6] === "X") ||
      (squares[1] === "X" && squares[4] === "X" && squares[7] === "X") ||
      (squares[2] === "X" && squares[5] === "X" && squares[8] === "X")
    ) {
      props.setWinner({
        title: "HackBright Wins",
        message:
          "The game has ended because Hack Bright placed three logos in a Vertical line",
      });
      props.setSquares(["", "", "", "", "", "", "", "", ""]);
      return;
    }

    if (
      (squares[0] === "O" && squares[3] === "O" && squares[6] === "O") ||
      (squares[1] === "O" && squares[4] === "O" && squares[7] === "O") ||
      (squares[2] === "O" && squares[5] === "O" && squares[8] === "O")
    ) {
      props.setWinner({
        title: "DevMountain Wins",
        message:
          "The game has ended because DevMountain placed three logos in a Vertical line",
      });
      props.setSquares(["", "", "", "", "", "", "", "", ""]);
      return;
    }

    if (
      (squares[0] === "X" && squares[4] === "X" && squares[8] === "X") ||
      (squares[2] === "X" && squares[4] === "X" && squares[6] === "X")
    ) {
      props.setWinner({
        title: "HackBright Wins",
        message:
          "The game has ended because HackBright placed three logos in a Diagonal line",
      });
      props.setSquares(["", "", "", "", "", "", "", "", ""]);
      return;
    }

    if (
      (squares[0] === "O" && squares[4] === "O" && squares[8] === "O") ||
      (squares[2] === "O" && squares[4] === "O" && squares[6] === "O")
    ) {
      props.setWinner({
        title: "DevMountain Wins",
        message:
          "The game has ended because DevMountain placed three logos in a Diagonal line",
      });
      props.setSquares(["", "", "", "", "", "", "", "", ""]);
      return;
    }
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        {props.squareValue === "O" && (
          <img
            src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png"
            alt="O"
          />
        )}
        {props.squareValue === "X" && (
          <img
            src="https://ih1.redbubble.net/image.209567622.8660/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"
            alt="X"
          />
        )}
      </div>
      {checkForWinner(props.squares)}
    </>
  );
};
export default Square;
