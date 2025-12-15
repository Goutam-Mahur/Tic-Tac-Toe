const Square = ({ value, onClick, isWinning }) => {
  return (
    <button
      className={`
        relative overflow-hidden
        aspect-square
        w-24 sm:w-28 md:w-32 lg:w-32
        text-xl sm:text-2xl md:text-3xl
        flex items-center justify-center
        rounded-xl
        transition-all duration-300
        ${
          isWinning
            ? `
              bg-white/90
              text-slate-900
            `
            : `
              bg-gray-50/60 hover:bg-gray-100
            `
        }
      `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
