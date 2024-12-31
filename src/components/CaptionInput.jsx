import React, { useState } from "react";

const CaptionInput = ({ onAddCaption }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleAddCaption = () => {
    if (!text || !start || !end) {
      alert("Please fill out all fields!");
      return;
    }
    onAddCaption({ text, start: parseFloat(start), end: parseFloat(end) });
    setText("");
    setStart("");
    setEnd("");
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-md">
      <textarea
        placeholder="Enter caption text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-24 p-2 border border-gray-300 rounded-md"
      />
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Start time (s)"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="End time (s)"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleAddCaption}
        className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
      >
        Add Caption
      </button>
    </div>
  );
};

export default CaptionInput;
