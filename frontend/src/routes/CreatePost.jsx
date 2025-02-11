import React, { useState } from "react";
import { Camera } from "lucide-react"; // Large Upload Icon

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    console.log({ image, caption });
    // Add API call to save post
  };

  return (
    <div
  className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6"
  style={{
    display: "ruby",
    paddingLeft: "10rem", // Equivalent to Tailwind's pl-10
  }}
>
<div
  className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-md pl-10 pr-10 pb-10"
  style={{
   
    paddingRight: "20rem",
    paddingBottom: "15rem",
    paddingLeft: "20rem",
  }}>
        <h2 className="text-3xl font-bold text-center mb-6">Create Post</h2>

        {/* Image Upload */}
        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer group">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <div className="h-48 w-48 rounded-xl border-4 border-gray-600 overflow-hidden flex items-center justify-center bg-gray-700 group-hover:border-blue-500 transition duration-300">
              {image ? (
                <img src={image} alt="Post Preview" className="h-full w-full object-cover" />
              ) : (
                <Camera className="h-16 w-16 text-gray-400 group-hover:text-blue-400 transition duration-300 absolute" />
              )}
            </div>
          </label>
        </div>

        {/* Caption Input */}
        <div className="mt-6">
          <label className="block text-sm text-gray-400 mb-2">Caption</label>
          <textarea
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-lg"
            placeholder="Write something..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
          />
        </div>

        {/* Post Button */}
        <button
  onClick={handlePost}
  className="w-full mt-6 py-3 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg 
            bg-gradient-to-r bg-gray-700 to-purple-600 hover:from-blue-600 hover:to-purple-700
            hover:shadow-xl transform hover:scale-105"
>
  🚀Post
</button>

      </div>
    </div>
  );
};

export default CreatePost;
