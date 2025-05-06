import React from "react";

const ScoreCard = ({ percentage, stroke }) => {
  const radius = 40; // Circle radius
  const circumference = 2 * Math.PI * radius;
  const progress = (60 / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center ">
      <svg className="absolute" width="120" height="120" viewBox="0 0 120 120">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="transparent"
        />

        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={stroke}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>

      {/* Center Percentage Text */}
      <span className="absolute text-lg font-bold text-gray-800">
        {percentage}%
      </span>
    </div>
  );
};

export default ScoreCard;
