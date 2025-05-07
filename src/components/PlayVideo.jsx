import React, { useState } from "react";
import YouTube from "react-youtube";

const PlayVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://youtu.be/CBWnBi-awSA";

  const handleClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      const videoElement = document.querySelector("video");
      if (videoElement) {
        videoElement.muted = false; // Ensures sound plays
        videoElement.play(); // Forces playback
      }
    }, 100); // Delay helps browsers properly initiate playback
  };

  return (
    <div
      className="w-[150px] h-[150px] rounded-lg absolute top-2 right-12 overflow-hidden flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      {isPlaying ? (
        <YouTube
          videoId={videoUrl.split("/").pop()}
          iframeClassName="w-full aspect-video"
        />
      ) : (
        <img
          src="/ai_interviewer.jpeg"
          alt="Preview"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default PlayVideo;
