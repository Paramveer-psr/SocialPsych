import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import { setProfileRoute } from "../utils/ApiRoutes";
import axios from "axios";

const SetProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleValidation = () => {
    return true;
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (!handleValidation()) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("gender", gender);
    if (profilePhoto) {
      formData.append("media", profilePhoto);
    }

    const { data } = await axios.post(setProfileRoute, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(data);
    navigate("/");
  };

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-gray-900 flex items-center justify-center">
        <Welcome />
      </div>
      <div className="flex items-center justify-center bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative"
            >
              {profilePhoto ? (
                <motion.img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-gray-00 shadow-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-gray-00 shadow-lg bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
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

            <div className="mt-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-4"
              >
                <label className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="mb-4"
              >
                <label className="block text-gray-400 text-sm mb-4 ">
                  Gender
                </label>
                <div className="flex space-x-6">
                  <div
                    onClick={() => setGender("Male")}
                    className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                      gender === "Male"
                        ? "bg-black border-black"
                        : "border-gray-400"
                    }`}
                  ></div>
                  <label className="text-gray-400">Male</label>

                  <div
                    onClick={() => setGender("Female")}
                    className={`w-6 h-6 rounded-full dark cursor-pointer border-2 ${
                      gender === "Female"
                        ? "bg-black border-black"
                        : "border-gray-400"
                    }`}
                  ></div>
                  <label className="text-gray-400">Female</label>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                onClick={handleSave}
                className="w-full p-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold text-white transition"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SetProfile;
