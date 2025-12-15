const MoveHistory = ({ history, jumpToMove }) => {
  const moves = history.map((_, index) => (
    <li
      key={index}
      className="rounded-md p-2 cursor-pointer"
      onClick={() => jumpToMove(index)}
    >
      {index === 0 ? "Start" : `Move ${index}`}
    </li>
  ));

  return (
    <div className="flex flex-col items-center w-full md:w-3/4">
      <div className="text-2xl font-bold mb-2 text-white text-center">
        Move History
      </div>

      <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-6 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
        {moves}
      </ul>
    </div>
  );
};

export default MoveHistory;
