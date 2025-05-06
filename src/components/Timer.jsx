import React from "react";

const Timer = () => {
  return (
    <div className="">
      <p className="text-gray-400">1:00/05:00</p>
      <div className="flex">
        <div className="bg-green-600 h-[4px] rounded-md w-[200px] mr-3" />
        <div className="bg-gray-300 h-[4px] rounded-m w-[200px] mr-3" />
        <div className="bg-gray-300 h-[4px] rounded-m w-[200px] mr-3" />
        <div className="bg-gray-300 h-[4px] rounded-m w-[200px] mr-3" />
        <div className="bg-gray-300 h-[4px] rounded-m w-[200px] mr-3" />
      </div>
    </div>
  );
};

export default Timer;
