import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";

import Timer from "./Timer";
import Volume from "./Volume";
import Score from "./Score";
import ScoreDetails from "./ScoreDetails";
import QuestionList from "./QuestionList";
import PlayVideo from "./PlayVideo";
import VideoChat from "./VideoChat";

const MainBar = () => {
  return (
    <div className="flex flex-col justify-center gap-2 h-full pl-2 pr-4 bg-gray-200 ">
      {/* top*/}
      <div className=" h-[55%] relative">
        <div className="flex justify-center items-center bg-white rounded-lg overflow-hidden">
          <div className=" rounded-lg h-[400px] w-full md:w-[600px] flex justify-center items-center ">
            {/* To set camera on */}
            <VideoChat />
          </div>
        </div>
        {/* interviewer */}
        {/* bigger screen */}
        <div className=" hidden md:block ">
          <PlayVideo />
        </div>
        {/* candidate */}
        <div className="w-[50px] h-[50px] rounded-lg absolute top-2 left-12 border overflow-hidden hidden md:flex justify-center items-center ">
          <img
            src="/candidate_4.jpeg"
            alt=""
            className=" w-full h-full object-cover"
          />{" "}
        </div>

        <div className="absolute left-[108px] top-2 hidden md:flex flex-col text-gray-500 ">
          <span className="text-sm font-semibold">Olivia Wild</span>
          <span className="text-xs">Talent</span>
        </div>
      </div>
      {/* overlay text */}
      <div className="absolute bottom-[52%] left-[18%] hidden xl:block">
        <p className=" text-white bg-gray-600 opacity-50 px-4 py-1 ">
          I&apos;m extremely ambitious person which motivates me in my
          professional career.
        </p>
      </div>
      <div className="absolute rotate-[125deg] transition-transform duration-300 right-[30%] bottom-[51%] hidden xl:block">
        <div className="flex ">
          <PiLessThan size={10} color="gray" />
          <PiGreaterThanLight size={10} color="gray" />
        </div>
      </div>

      {/* Timer */}
      <div className="absolute bottom-[48%] left-10 hidden xl:block">
        <Timer />
      </div>
      {/* Volume regulator */}
      <div className="absolute right-[32%] bottom-[50%] hidden xl:block ">
        <Volume />
      </div>
      {/* bottom */}
      <div className=" h-[45%] flex  items-center gap-3  ">
        {/* bottom */}
        <div className=" w-full xl:w-[30%] h-full ">
          {/* card */}
          <QuestionList />
        </div>
        {/* score and analysis */}
        <div className="w-[70%]  h-full hidden xl:flex ">
          <div className="w-[45%] h-full bg-white rounded-l-lg ">
            <Score />
          </div>
          <div className="w-[55%] h-full ml-1 rounded-r-xl bg-white">
            {/* score details */}
            <ScoreDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
