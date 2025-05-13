import React from "react";

const NumberingLinkage = () => {
  return (
    <>
      <div className=" absolute left-[27px] top-[30.2%] h-[29px] w-[2px] bg-green-500 rounded-full hidden xl:block" />

      <div className=" absolute my-[0.5px] left-[27px] top-[47%] hidden xl:block">
        <div className=" h-[10px] w-[2px]  bg-gray-300 rounded-full" />
        <div className=" h-[10px] w-[2px] my-[1px] bg-gray-300 rounded-full" />
        <div className=" h-[4px] w-[2px] my-[1px] bg-gray-300 rounded-full" />
        <div className=" h-[10px] w-[2px]  bg-gray-300 rounded-full" />
      </div>
      <div className=" absolute my-[1px] left-[27px] top-[67%] hidden xl:block">
        <div className=" h-[5px] w-[2px]  my-[1px] bg-gray-300 rounded-full" />
        <div className=" h-[10px] w-[2px]  bg-gray-300 rounded-full" />
        <div className=" h-[10px] my-[1px] w-[2px]  bg-gray-300 rounded-full" />
      </div>
      <div className=" absolute my-[1px] left-[27px] top-[83%] hidden xl:block">
        <div className=" h-[6px] w-[2px] my-[1px] bg-gray-300 rounded-full" />
        <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
      </div>
    </>
  );
};

export default NumberingLinkage;
