import React, { useState } from "react";
import { motion } from "framer-motion";

const EditProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://images.unsplash.com/photo-1614914135224-925593607248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
  );
  const [bio, setBio] = useState("Web Developer • Tech Enthusiast • Coffee Lover");
  const [username, setUsername] = useState("John Doe");
  const [userHandle, setUserHandle] = useState("@johndoe");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-start ml-64 mr-32"
    >
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full bg-gray-800 rounded-lg shadow-lg mb-10 pb-5"
      >
        <h1 className="text-3xl font-bold p-5">Edit Profile</h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-1 w-full bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative"
          >
            <motion.img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <label
              htmlFor="upload-photo"
              className="absolute bottom-0 right-0 bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-2 border-gray-900"
            >
              <input
                id="upload-photo"
                type="file"
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </label>
          </motion.div>

          <div className="mt-6 w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-4"
            >
              <label className="block text-gray-400 text-sm mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-4"
            >
              <label className="block text-gray-400 text-sm mb-2">User Handle</label>
              <input
                type="text"
                value={userHandle}
                onChange={(e) => setUserHandle(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mb-6"
            >
              <label className="block text-gray-400 text-sm mb-2">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              ></textarea>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              onClick={handleSave}
              className="w-full p-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold text-white transition"
            >
              Save Changes
            </motion.button>
          </div>
        </div>
      </motion.main>
    </motion.div>
  );
};

export default EditProfile;
