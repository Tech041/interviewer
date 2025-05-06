import { BiVolumeFull } from "react-icons/bi";
import React from "react";

const Volume = () => {
  return (
    <div className=" left-5 flex flex-col justify-center items-center h-[150px] w-[40px] bg-gray-500 opacity-70 ">
      <div className="h-[50px] w-[4px] bg-white" />
      <div className="h-[14px] w-[14px] flex items-center justify-center rounded-full overflow-hidden bg-green-600">
        <div className="h-[8px] w-[8px] bg-white rounded-full" />
      </div>
      <div className="h-[40px] w-[4px] bg-green-600" />
      <div className="mt-2">
        <BiVolumeFull size={20} color="white" />
      </div>
    </div>
  );
};

export default Volume;
