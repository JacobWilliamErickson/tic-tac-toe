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
return(
    <>
  <div className="square" onClick={handleClick}>
        {props.squareValue === "O" && <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="O" />}
        {props.squareValue === "X" && <img src="https://ih1.redbubble.net/image.209567622.8660/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"alt="X" />}
        </div>
    </>
    )
};
export default Square;
