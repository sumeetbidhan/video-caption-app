import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    const resizeVideo = () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.style.width = "100%";
        videoElement.style.height = "auto";
      }
    };
    window.addEventListener("resize", resizeVideo);
    resizeVideo();
    return () => window.removeEventListener("resize", resizeVideo);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const interval = setInterval(() => {
      const currentTime = videoRef.current.currentTime;
      const caption = captions.find(
        (cap) => currentTime >= cap.start && currentTime <= cap.end
      );
      setCurrentCaption(caption ? caption.text : "");
    }, 500);

    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md">
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          className="w-full rounded-md shadow-lg"
        />
      ) : (
        <p className="text-gray-500 text-center">Please enter a valid video URL.</p>
      )}
      <div className="mt-4 bg-gray-800 text-white text-center p-2 rounded-md">
        {currentCaption || "No caption available"}
      </div>
    </div>
  );
};

export default VideoPlayer;
