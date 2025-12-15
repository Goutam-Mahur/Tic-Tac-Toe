import { useState } from "react";
import Board from "./Board";
import GameControls from "./GameControls";
import MoveHistory from "./MoveHistory";
import { useGameState } from "../hooks/useGameState";

const Game = () => {
  const {
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
  } = useGameState();

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen py-6 px-4">
      <div className="text-4xl font-bold mb-4 text-white">Tic Tac Toe</div>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center w-full md:w-3/4 p-4">
          <GameControls
            mode={mode}
            setMode={setMode}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            open={open}
            setOpen={setOpen}
          />

          <div className="mb-4">
            <Board
              isXTurn={isXTurn}
              board={currentSquares}
              onPlay={handlePlay}
            />
          </div>

          <div className="flex gap-4">
            <button
              className="relative overflow-hidden press bg-slate-900/90 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 w-full md:w-auto shadow-lg active:scale-[0.97]"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className={`relative overflow-hidden press font-semibold py-2 px-4 rounded-xl transition duration-200 w-full md:w-auto shadow-lg active:scale-[0.97] ${
                currentBoard === 0
                  ? "bg-slate-900/90 hover:bg-slate-900 text-white"
                  : "bg-white/15 text-white/50 font-bold backdrop-blur-md cursor-not-allowed"
              }`}
              onClick={handleSwap}
            >
              Swap
            </button>
          </div>
        </div>

        <MoveHistory
          history={history}
          currentBoard={currentBoard}
          jumpToMove={jumpToMove}
        />
      </div>
    </div>
  );
};

export default Game;
