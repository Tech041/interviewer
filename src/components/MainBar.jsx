import React, { useRef, useState } from "react";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";

import Timer from "./Timer";
import Volume from "./Volume";
import Score from "./Score";
import ScoreDetails from "./ScoreDetails";
import QuestionList from "./QuestionList";

const MainBar = () => {
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play(); // Ensure video starts playing
      }

      setCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert(
        "Failed to access the camera. Please check your browser permissions."
      );
    }
  };
  return (
    <div className="flex flex-col justify-center gap-2 h-full pl-2 pr-4 bg-gray-200 ">
      {/* top*/}
      <div className=" h-[55%] relative">
        <div className="flex justify-center items-center bg-white rounded-lg overflow-hidden">
          <div className=" rounded-lg h-[400px] w-[600px] flex justify-center items-center ">
            {/* To set camera on */}
            <div
              className="h-full w-full flex justify-center items-center cursor-pointer"
              onClick={startCamera}
            >
              {!cameraActive ? (
                <img
                  src="/candidate_4.jpeg"
                  alt="Candidate"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
        {/* interviewer */}
        <div className="w-[150px] h-[150px] rounded-lg absolute top-2 right-12 overflow-hidden flex justify-center items-center">
          <img
            src="/ai_interviewer.jpeg"
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>
        {/* candidate */}
        <div className="w-[50px] h-[50px] rounded-lg absolute top-2 left-12 border overflow-hidden flex justify-center items-center">
          <img
            src="/candidate_4.jpeg"
            alt=""
            className=" w-full h-full object-cover"
          />{" "}
        </div>
        <div className="absolute left-[108px] top-2 flex flex-col text-gray-500">
          <span className="text-sm font-semibold">Olivia Wild</span>
          <span className="text-xs">Talent</span>
        </div>
      </div>
      {/* overlay text */}
      <div className="absolute bottom-[52%] left-[25%]">
        <p className=" text-white bg-gray-600 opacity-50 px-4 py-1">
          I&apos;m extremely ambitious person which motivates me in my
          professional career.
        </p>
      </div>
      <div className="absolute rotate-[125deg] transition-transform duration-300 right-[30%] bottom-[51%] ">
        <div className="flex ">
          <PiLessThan size={10} color="gray" />
          <PiGreaterThanLight size={10} color="gray" />
        </div>
      </div>

      {/* Timer */}
      <div className="absolute bottom-[48%] left-10">
        <Timer />
      </div>
      {/* Volume regulator */}
      <div className="absolute right-[32%] bottom-[50%]">
        <Volume />
      </div>
      {/* bottom */}
      <div className=" h-[45%] flex items-center gap-3  relative">
        {/* bottom */}
        <div className="w-[30%] h-full ">
          {/* card */}
          <QuestionList />
        </div>
        {/* score and analysis */}
        <div className="w-[70%] flex  h-full">
          <div className="w-[45%] h-full bg-white rounded-l-lg ">
            <Score />
          </div>
          <div className="w-[55%] h-full ml-1 rounded-r-xl bg-white">
            {/* score details */}
            <ScoreDetails />
          </div>
        </div>
        <div className=" absolute left-[28px] top-[34%] h-[30px] w-[2px] bg-green-500 rounded-full" />

        <div className=" absolute left-[28px] top-[51%]">
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
        </div>
        <div className=" absolute left-[28px] top-[70%]">
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
        </div>
        <div className=" absolute left-[28px] top-[86%]">
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
          <div className=" h-[10px] w-[2px] bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MainBar;
