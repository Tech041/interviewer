import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import InputForm from "./InputForm";
import ChatBody from "./ChatBody";
const chatMenu = ["Record", "Chat", "Notes", "Docs"];
const SideBar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pl-3  rounded-l-3xl overflow-hidden relative bg-gray-300">
      <div className="w-full h-[98%] ">
        {/* top */}
        <div className="h-[20%] w-full flex flex-col  items-center justify-center bg-white pl-10   rounded-tl-2xl  pt-8">
          <div className="flex-1 flex items-center justify-between gap-6  w-full ">
            <div className="flex-1 flex items-center justify-center  h-[70px] w-[90px] rounded-full overflow-hidden">
              <img
                src="/candidate_4.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-[3]">
              <div className="">
                <p className="text-2xl font-bold">Olivia Wild</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="">Female</span>
                <span className="text-3xl">•</span>
                <span className="">81 y.o</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full pt-3">
            <p className="flex items-center justify-between  gap-2 pr-4">
              {chatMenu.map((item, index) => (
                <span
                  key={index}
                  className=" font-semibold text-gray-500 hover:border-b-4 border-pink-400 hover:cursor-pointer hover:text-black pb-2"
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
        {/* body */}
        <div className=" bg-white h-[80%] mt-1 rounded-bl-2xl">
          {/* chat body */}
          <div className="bg-white h-[80%] flex items-center justify-center ">
            {/* chat */}

            {/* chat body */}
            <ChatBody />
          </div>
          {/* video */}
          <div className="h-[5%]">
            <div className="flex justify-center items-center gap-3">
              <IoVideocamOutline size={20} color="gray" />
              <span className="text-gray-500">Video call started</span>
            </div>
          </div>
          {/* input */}
          <div className=" h-[15%]">
            <div className="w-full px-3">
              <InputForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
