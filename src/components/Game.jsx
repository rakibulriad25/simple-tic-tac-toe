import Board from "./Board";

function calculateWinner(squares) {
  const winingPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [3, 4, 5],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [2, 5, 8],
  ];

  for (let i = 0; i < winingPos.length; i++) {
    let [a, b, c] = winingPos[i];
    let winStr = squares[a] + squares[b] + squares[c];
    console.log(winStr);
    if (winStr === "XXX") {
      return "X";
    }
    if (winStr === "OOO") {
      return "O";
    } 
  }
  return null;
}

function Game() {
  return (
    <>
      <div>
        <Board calWinner={calculateWinner} />
        {/* <Result /> */}
      </div>
    </>
  );
}

export default Game;
