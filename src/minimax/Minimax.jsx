const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(b) {
  for (const [a, b2, c] of LINES) {
    if (b[a] && b[a] === b[b2] && b[a] === b[c]) return b[a];
  }
  return b.includes(null) ? null : "draw";
}

function emptyCells(b) {
  return b.map((v, i) => (v === null ? i : null)).filter((v) => v !== null);
}

function minimax(board, isMax) {
  const res = getWinner(board);
  if (res === "O") return 1;
  if (res === "X") return -1;
  if (res === "draw") return 0;

  let best = isMax ? -Infinity : Infinity;

  for (const i of emptyCells(board)) {
    board[i] = isMax ? "O" : "X";
    const score = minimax(board, !isMax);
    board[i] = null;
    best = isMax ? Math.max(best, score) : Math.min(best, score);
  }
  return best;
}

function bestMove(board) {
  let bestScore = -Infinity;
  let move = null;

  for (const i of emptyCells(board)) {
    board[i] = "O";
    const score = minimax(board, false);
    board[i] = null;

    if (score > bestScore) {
      bestScore = score;
      move = i;
    }
  }
  return move;
}

function aiEasy(board) {
  const e = emptyCells(board);
  return e[Math.floor(Math.random() * e.length)];
}

function aiMedium(board) {
  return Math.random() < 0.65 ? aiEasy(board) : bestMove(board);
}

function aiHard(board) {
  return Math.random() < 0.95 ? bestMove(board) : aiEasy(board);
}

function aiImpossible(board) {
  const e = emptyCells(board);
  if (e.length === 9) return aiMedium(board);

  return bestMove(board);
}

function getAIMove(board, level) {
  switch (level) {
    case "easy":
      return aiEasy(board);
    case "medium":
      return aiMedium(board);
    case "hard":
      return aiHard(board);
    case "impossible":
      return aiImpossible(board);
    default:
      return null;
  }
}

export { getAIMove, LINES, getWinner };
