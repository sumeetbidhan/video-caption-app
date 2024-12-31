import React, { useState } from "react";

const CaptionList = ({ captions, onDeleteCaption, onEditCaption }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");
  const [editStart, setEditStart] = useState("");
  const [editEnd, setEditEnd] = useState("");

  const handleEdit = (index) => {
    setIsEditing(index);
    const caption = captions[index];
    setEditText(caption.text);
    setEditStart(caption.start);
    setEditEnd(caption.end);
  };

  const saveEdit = (index) => {
    onEditCaption(index, {
      text: editText,
      start: parseFloat(editStart),
      end: parseFloat(editEnd),
    });
    setIsEditing(null);
    setEditText("");
    setEditStart("");
    setEditEnd("");
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Captions</h2>
      {captions.map((caption, index) => (
        <div key={index} className="flex items-center space-x-4">
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                value={editStart}
                onChange={(e) => setEditStart(e.target.value)}
                className="w-20 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                value={editEnd}
                onChange={(e) => setEditEnd(e.target.value)}
                className="w-20 p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => saveEdit(index)}
                className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="flex-grow">{caption.text}</p>
              <p className="w-20">{caption.start}s</p>
              <p className="w-20">{caption.end}s</p>
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteCaption(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CaptionList;
