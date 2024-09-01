import React from "react";
import Square from "./Square";

const Board = ({ isXTurn, board, onPlay }) => {
  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    onPlay(newBoard);
  };

  const calculateWinner = (board) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let row of winnerLogic) {
      const [a, b, c] = row;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return false;
  };

  const winner = calculateWinner(board);
  return (
    <div className="flex flex-col items-center mt-5">
      {!winner && (
        <div className="h-10 ">player {isXTurn ? "X" : "O"} turn</div>
      )}

      {winner && <div className=" font-medium h-10">{winner} won the game</div>}

      <div className="flex flex-row">
        <Square value={board[0]} onClick={() => handleClick(0)} />
        <Square value={board[1]} onClick={() => handleClick(1)} />
        <Square value={board[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="flex flex-row">
        <Square value={board[3]} onClick={() => handleClick(3)} />
        <Square value={board[4]} onClick={() => handleClick(4)} />
        <Square value={board[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="flex flex-row">
        <Square value={board[6]} onClick={() => handleClick(6)} />
        <Square value={board[7]} onClick={() => handleClick(7)} />
        <Square value={board[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
