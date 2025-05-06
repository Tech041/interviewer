const ScoreButton = ({ icon, text, className, className1 }) => {
  return (
    <button className="flex justify-center items-center px-2 py-1 gap-2 border border-gray-400 rounded-lg w-full">
      <span className={className}>{icon}</span>
      <span className={className1}>{text}</span>
    </button>
  );
};

export default ScoreButton;
