import Square from "./Square";
import { LINES, getWinner } from "../minimax/Minimax";

const Board = ({ isXTurn, board, onPlay }) => {
  const getWinningLine = (board) => {
    for (const [a, b, c] of LINES) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return [a, b, c];
      }
    }
    return [];
  };

  const handleClick = (index) => {
    if (getWinner(board) || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    onPlay(newBoard);
  };

  const winner = getWinner(board);
  const winningLine = winner ? getWinningLine(board) : [];
  const isDraw = winner == "draw";
  const rows = [0, 1, 2];

  return (
    <div className="flex flex-col items-center mt-5 gap-1">
      {!winner && !isDraw && (
        <div className="text-2xl h-10 text-white font-bold">
          player {isXTurn ? "X" : "O"} turn
        </div>
      )}

      {isDraw && <div className="text-2xl text-white font-bold h-10">Draw</div>}

      {winner && !isDraw && (
        <div className="text-2xl text-white font-bold h-10">{winner} wins</div>
      )}

      {rows.map((row) => (
        <div key={row} className="flex flex-row gap-1">
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={board[index]}
                isWinning={winningLine.includes(index)}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
