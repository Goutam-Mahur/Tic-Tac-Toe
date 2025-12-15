import { useState, useEffect } from "react";
import { getAIMove, getWinner } from "../minimax/Minimax";

export const useGameState = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentBoard, setCurrentBoard] = useState(0);
  const [isXTurn, setIsXTurn] = useState(true);
  const [mode, setMode] = useState("two");
  const [difficulty, setDifficulty] = useState("easy");

  const currentSquares = history[currentBoard];

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
    if (currentBoard === 0) setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentBoard(0);
    setIsXTurn(true);
  };

  useEffect(() => {
    if (
      mode !== "one" ||
      isXTurn ||
      currentBoard !== history.length - 1 ||
      getWinner(currentSquares)
    ) {
      return;
    }

    const move = getAIMove(currentSquares, difficulty);
    if (move === null) return;

    const timer = setTimeout(() => {
      const newBoard = [...currentSquares];
      newBoard[move] = "O";
      handlePlay(newBoard);
    }, 400);

    return () => clearTimeout(timer);
  }, [isXTurn, mode, difficulty, currentBoard, history, currentSquares]);

  return {
    history,
    currentBoard,
    currentSquares,
    isXTurn,
    mode,
    difficulty,
    setMode,
    setDifficulty,
    handlePlay,
    handleSwap,
    handleReset,
    jumpToMove,
  };
};
