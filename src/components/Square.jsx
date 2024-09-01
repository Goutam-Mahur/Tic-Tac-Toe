const Square = ({ value, onClick }) => {
  return (
    <button
      className="border-2 border-gray-700 bg-gray-50 h-32 w-32 text-3xl flex items-center justify-center transition-colors duration-200 hover:bg-gray-100 rounded-lg"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
