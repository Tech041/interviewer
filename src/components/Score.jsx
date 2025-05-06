import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import ScoreButton from "./ScoreButton";
import HireButton from "./HireButton";

const Score = () => {
  return (
    <div>
      <p className="pt-4 px-4">
        <MdErrorOutline size={20} color="green" />
      </p>
      <h1 className="p-4 font-semibold text-4xl">85%</h1>
      <h3 className="font-bold text-base text-gray-700 px-4">
        A video score summary
      </h3>
      <p className="pl-4 text-gray-500">
        The presentation of talent is <span className="font-bold text-gray-500">good.</span>
        Check the breakdown summary of AI video score.
      </p>
      <div className="flex  justify-center items-center gap-3 px-4">
        <ScoreButton
          icon={<IoMdCheckmark />}
          text={"Shortlist"}
          className={"text-green-600 font-bold"}
          className1={"font-semibold hover:text-green-600"}
        />
        <ScoreButton
          icon={"X"}
          text={"Reject"}
          className={"text-red-600 font-bold hover:text-red-500"}
          className1={"font-semibold hover:text-red-600"}
        />
      </div>
      <div className="py-3 px-4 pt-12 ">
        <HireButton text={"Hire Talent"} />
      </div>
    </div>
  );
};

export default Score;
