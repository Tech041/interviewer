import React from "react";

const ChatBody = () => {
  return (
    <div className="px-4">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="/ai_interviewer.jpeg"
            />
          </div>
        </div>
        <div className="chat-header flex  justify-center  w-full ">
          <time className="text-base opacity-50  text-center">June 1</time>
        </div>
        <div className="chat-bubble">Welcome Nelson! How can I help you?</div>
        <div className="chat-footer opacity-50 pt-1">15.00</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="/candidate_4.jpeg"
            />
          </div>
        </div>

        <div className="chat-bubble">I am here for an interview!</div>
        <div className="chat-footer opacity-50"> 12:46</div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="/ai_interviewer.jpeg"
            />
          </div>
        </div>
        <div className="chat-header flex  justify-center  w-full ">
          <time className="text-base opacity-50  text-center">June 2</time>
        </div>
        <div className="chat-bubble">
          That is nice, can you please introduce yourself?!
        </div>
        <div className="chat-footer opacity-50 pt-1">15.00</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="/candidate_4.jpeg"
            />
          </div>
        </div>

        <div className="chat-bubble">
          My name is Nelson, a software developer
        </div>
        <div className="chat-footer opacity-50"> 12:46</div>
      </div>
    </div>
  );
};

export default ChatBody;
