import React from "react";
import { MdErrorOutline } from "react-icons/md";
const data = [
  { num: 1, text: "Tell us about yourself?" },
  { num: 2, text: "Why do you think you are good at sales?" },
  { num: 3, text: "What is biggest deal you have closed?" },
  { num: 4, text: "Why you choose this company?" },
  { num: 5, text: "What is your expectation?" },
];

const QuestionList = () => {
  return (
    <div className="border rounded-xl bg-white h-full w-full">
      <div className="">
        <p className="flex justify-end pr-4 pt-4">
          <MdErrorOutline size={20} color="green" />
        </p>
        <h3 className="px-4 py-3 font-semibold">Question List</h3>
      </div>
      {/* text and numbering */}
      <div className="flex  items-center px-4">
        <div className="flex flex-col items-start space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div
                className={`text-sm ${
                  item.num <= 2
                    ? "bg-green-600"
                    : "bg-white border border-gray-400"
                } h-6 w-6 flex   items-center justify-center rounded-full`}
              >
                <span
                  className={`${
                    item.num <= 2 ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item.num}
                </span>
              </div>
              <div
                className={`" ${
                  index === data.length - 1 ? "text-gray-400" : "text-black"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
