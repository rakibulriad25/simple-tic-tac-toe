import { useState } from "react";
import Square from "./Square";

export default function Board({ calWinner }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);

  function handleClick(value) {
    if (squares[value] || calWinner(squares)) {
      return;
    }

    if (isNextX) {
      squares[value] = "X";
    } else {
      squares[value] = "O";
    }

    const newSquares = [...squares];
    // console.log(newSquares);
    setIsNextX(!isNextX);
    setSquares(newSquares);
  }

  let winner = calWinner(squares);

  let status;

  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next Player is: " + (isNextX ? "X" : 0);
  }

  return (
    <>
      <div>
        <div className="my-1 border border-green-500 px-1">{status}</div>
        <div className="flex">
          <Square value={squares[0]} whenClicked={() => handleClick(0)} />
          <Square value={squares[1]} whenClicked={() => handleClick(1)} />
          <Square value={squares[2]} whenClicked={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} whenClicked={() => handleClick(3)} />
          <Square value={squares[4]} whenClicked={() => handleClick(4)} />
          <Square value={squares[5]} whenClicked={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} whenClicked={() => handleClick(6)} />
          <Square value={squares[7]} whenClicked={() => handleClick(7)} />
          <Square value={squares[8]} whenClicked={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
