import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { getUserPosts } from "../utils/ApiRoutes";
import { formatDistanceToNow } from "date-fns";

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const fetchUserPosts = async () => {
    try {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      // console.log(document.cookie); // Debugging line
      // console.log("Token:", token); // Debugging line
      if (!token) {
        throw new Error("Token not found");
      }
      const response = await axios.get(`${getUserPosts}/${user.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      if (Array.isArray(response.data.message)) {
        setPosts(response.data.message); // Assuming the posts are in the `data` field
      } else {
        console.error("Unexpected response format:", response.data);
        alert("Failed to fetch user posts. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching user posts:", error);
      alert("Failed to fetch user posts. Please try again later.");
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, [user.username]);

  const handleShare = (postContent) => {
    if (navigator.share) {
      navigator
        .share({
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-start ml-64 mr-32   ">
      <header className="w-full bg-gray-800 rounded-lg shadow-lg mb-10 pb-5">
        <div className="flex items-center flex-wrap pt-5 pl-5">
          <div className="relative flex-shrink-0">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-lg"
            />
            <span className="absolute bottom-0 right-0 bg-green-400 w-6 h-6 rounded-full border-2 border-gray-900"></span>
          </div>
          <div className="ml-7 flex-1">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-400">@{user.username}</p>
            <p className="mt-2 text-gray-500">
              {user.bio || "This user has not set a bio."}
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-white">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(posts) &&
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-900 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center mb-2">
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-white">{user.name}</p>
                      <p className="text-sm text-gray-400">
                        {formatDistanceToNow(new Date(post.createdAt))} ago
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{post.caption}</p>
                  {post.media && (
                    <img
                      src={post.media}
                      alt="Post"
                      className="w-full h-auto mb-4 rounded-lg"
                    />
                  )}
                </div>
                <button
                  onClick={() => handleShare(post.caption)}
                  className="self-center hover:text-indigo-400 transition"
                >
                  Share
                </button>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
