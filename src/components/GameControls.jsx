const GameControls = ({
  mode,
  setMode,
  difficulty,
  setDifficulty,
  open,
  setOpen,
}) => {
  const levels = ["easy", "medium", "hard", "impossible"];
  return (
    <div className="flex flex-col gap-3 mb-4 w-full max-w-xs">
      <div className="flex rounded-xl overflow-hidden shadow-lg">
        <button
          onClick={() => setMode("two")}
          className={`flex-1 py-2 font-semibold transition ${
            mode === "two"
              ? "bg-slate-900/90 text-white"
              : "bg-white/15 text-white/90 backdrop:blur-md"
          }`}
        >
          2 Player
        </button>

        <button
          onClick={() => setMode("one")}
          className={`flex-1 py-2 font-semibold transition ${
            mode === "one"
              ? "bg-slate-900/90 text-white"
              : "bg-white/15 text-white/90"
          }`}
        >
          vs AI
        </button>
      </div>

      {mode === "one" && (
        <div className="relative w-full max-w-xs">
          <button
            onClick={() => setOpen(!open)}
            className="w-full bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl px-3 py-2 flex items-center justify-between shadow-lg transition hover:bg-white/25
            "
          >
            <span className="capitalize">{difficulty}</span>
            <span className="text-white/80 text-lg">{open ? "▴" : "▾"}</span>
          </button>

          {open && (
            <div
              className="absolute z-20 mt-2 w-full bg-slate-900/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden
            "
            >
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setDifficulty(level);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-white font-medium capitalize transition ${
                    difficulty === level ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameControls;
