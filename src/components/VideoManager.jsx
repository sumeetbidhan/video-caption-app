import React, { useState } from "react";

const VideoManager = ({ videos, currentVideoIndex, setCurrentVideoIndex, onAddVideo }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleAddVideo = () => {
    if (!name || !url) {
      alert("Please provide both a video name and URL.");
      return;
    }
    onAddVideo(name, url);
    setName("");
    setUrl("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Manage Videos</h2>
      <input
        type="text"
        placeholder="Video Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleAddVideo}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
      >
        Add Video
      </button>
      {videos.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Video List</h3>
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                currentVideoIndex === index ? "bg-blue-200" : "bg-gray-100"
              }`}
            >
              {video.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoManager;
