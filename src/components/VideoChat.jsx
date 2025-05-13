import React, { useRef, useState } from "react";

const VideoChat = () => {
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
    <div
      className="h-full w-full flex  md:justify-center items-center cursor-pointer"
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
  );
};

export default VideoChat;
