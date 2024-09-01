import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentBoard, setCurrentBoard] = useState(0);
  const currentSquares = history[currentBoard];
  const [isXTurn, setIsXTurn] = useState(true);

  const handlePlay = (newBoard) => {
    const newHistory = [...history.slice(0, currentBoard + 1), newBoard];
    setHistory(newHistory);
    setCurrentBoard(newHistory.length - 1);
    setIsXTurn(!isXTurn);
  };

  const jumpToMove = (index) => {
    setCurrentBoard(index);
    setIsXTurn(index % 2 === 0);
  };

  const handleSwap = () => {
    if (currentBoard === 0) {
      setIsXTurn(!isXTurn);
    }
  };

  const moves = history.map((board, index) => (
    <li
      key={index}
      className={`bg-${index === currentBoard ? "blue" : "gray"}-200 rounded-md p-2 cursor-pointer hover:bg-${index === currentBoard ? "blue" : "gray"}-300 transition duration-200`}
      onClick={() => jumpToMove(index)}
    >
      {index === 0 ? "Start" : `Move ${index}`}
    </li>
  ));

  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentBoard(0);
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-6 px-4 bg-gray-100">
      <div className="text-3xl font-bold mb-4 text-gray-800">Tic Tac Toe</div>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center w-full md:w-3/4 bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <Board
              isXTurn={isXTurn}
              board={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition duration-200 w-full md:w-auto"
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              className={`text-white font-semibold py-2 px-4 rounded transition duration-200 w-full md:w-auto ${currentBoard === 0
                  ? "bg-teal-500 hover:bg-teal-600"
                  : "bg-gray-500"
                }`}
              onClick={handleSwap}
            >
              Swap
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-3/4 bg-white p-4 rounded-lg shadow-md">
          <div className="text-xl font-bold mb-2 text-gray-700 text-center">
            Move History
          </div>

          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-6 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            {moves}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Game;
