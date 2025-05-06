import React from "react";
import ScoreCard from "./ScoreCard";

const ScoreDetails = () => {
  return (
    <div className="">
      <h2 className="p-4 font-bold text-gray-600">
        AI Video score details
      </h2>

      <div className="flex justify-between items-center px-10">
        <div className="">
          <ScoreCard percentage={60} stroke={"#6366F1"} />
          <p className="font-bold">Professionalism</p>
        </div>
        <div className="">
          <ScoreCard percentage={90} stroke={"#006400"} />
          <p className="font-bold">Business Acumen</p>
        </div>{" "}
      </div>
      <div className="flex justify-between items-center px-10 pt-2">
        <div className="">
          <ScoreCard percentage={20} stroke={"#B22222"} />
          <p className="font-bold">Opportunistic</p>
        </div>{" "}
        <div className="">
          <ScoreCard percentage={80} stroke={"#006400"} />
          <p className="font-bold">Closing Technique</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default ScoreDetails;
