import React from "react";

const HireButton = ({ text }) => {
  return (
    <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-400">
      {text}
    </button>
  );
};

export default HireButton;
