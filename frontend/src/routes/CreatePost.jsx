import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleCreatePost = (e) => {
    e.preventDefault();
    // Implement post creation logic (e.g., API call) here
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      // Generate a preview URL for immediate display
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="pl-10 bg-gray-900 min-h-screen flex items-center justify-center">
      <main className="max-w-screen-md w-full bg-gray-800 border border-gray-700 rounded-2xl p-4">
        <h2 className="text-white text-xl mb-4">Create a Post</h2>
        <form onSubmit={handleCreatePost} className="space-y-4">
          <textarea
            className="bg-gray-700 w-full text-white rounded-lg p-2"
            placeholder="Write your caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Pencil icon for file upload */}
          <label htmlFor="mediaUpload" className="cursor-pointer inline-block">
            <PencilSquareIcon className="w-6 h-6 text-gray-400 hover:text-blue-500" />
          </label>
          <input
            id="mediaUpload"
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />

          {/* Show a preview at a fixed size */}
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-48 h-48 object-cover mt-4 rounded-xl"
            />
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
