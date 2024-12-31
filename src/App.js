import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionInput from "./components/CaptionInput";
import CaptionList from "./components/CaptionList";
import VideoManager from "./components/VideoManager";

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const addVideo = (name, url) => {
    const newVideo = { name, url, captions: [] };
    setVideos([...videos, newVideo]);
    setCurrentVideoIndex(videos.length);
  };

  const addCaption = (caption) => {
    if (currentVideoIndex === null) return;
    const updatedVideos = [...videos];
    updatedVideos[currentVideoIndex].captions.push(caption);
    setVideos(updatedVideos);
  };

  const editCaption = (captionIndex, updatedCaption) => {
    if (currentVideoIndex === null) return;
    const updatedVideos = [...videos];
    updatedVideos[currentVideoIndex].captions[captionIndex] = updatedCaption;
    setVideos(updatedVideos);
  };

  const deleteCaption = (captionIndex) => {
    if (currentVideoIndex === null) return;
    const updatedVideos = [...videos];
    updatedVideos[currentVideoIndex].captions.splice(captionIndex, 1);
    setVideos(updatedVideos);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(videos, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "videos_and_captions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const importedVideos = JSON.parse(event.target.result);
        setVideos(importedVideos);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Video Captioning App</h1>
      <div className="w-full max-w-lg space-y-4">
        <VideoManager
          videos={videos}
          currentVideoIndex={currentVideoIndex}
          setCurrentVideoIndex={setCurrentVideoIndex}
          onAddVideo={addVideo}
        />
        {currentVideoIndex !== null && (
          <>
            <VideoPlayer
              videoUrl={videos[currentVideoIndex].url}
              captions={videos[currentVideoIndex].captions}
            />
            <CaptionInput onAddCaption={addCaption} />
            <CaptionList
              captions={videos[currentVideoIndex].captions}
              onDeleteCaption={deleteCaption}
              onEditCaption={editCaption}
            />
          </>
        )}
        <div className="flex space-x-4">
          <button
            onClick={exportData}
            className="px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700"
          >
            Export Data
          </button>
          <label className="px-4 py-2 bg-yellow-600 text-white rounded-md shadow hover:bg-yellow-700 cursor-pointer">
            Import Data
            <input
              type="file"
              accept="application/json"
              onChange={importData}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
