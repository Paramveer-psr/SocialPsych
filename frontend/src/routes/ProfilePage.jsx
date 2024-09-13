import React, { useState } from "react";
import Header from "../components/Header";
import SidebarWithCta from "../components/SidebarWithCta";

const ProfilePage = () => {
  const [followers, setFollowers] = useState(500);
  const [following, setFollowing] = useState(300);
  const [posts, setPosts] = useState([
    { id: 1, content: "This is my first post!", timestamp: "2 hours ago" },
    { id: 2, content: "Loving the new React updates!", timestamp: "1 day ago" },
  ]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white flex">
        {/* Sidebar Section */}
        <div className="w-1/5 p-6 bg-gray-800">
          <SidebarWithCta />
        </div>

        {/* Main Content Section */}
        <div className="flex-auto p-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center py-10">
            <header className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 p-8 rounded-lg shadow-lg mb-10">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-lg"
                  />
                  <span className="absolute bottom-0 right-0 bg-green-400 w-6 h-6 rounded-full border-2 border-gray-900"></span>
                </div>
                <div className="ml-7">
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <p className="text-gray-400">@johndoe</p>
                  <p className="mt-2 text-gray-500">
                    Web Developer • Tech Enthusiast • Coffee Lover
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white">
                    {followers}
                  </p>
                  <p className="text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white">
                    {following}
                  </p>
                  <p className="text-gray-400">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white">
                    {posts.length}
                  </p>
                  <p className="text-gray-400">Posts</p>
                </div>
              </div>
            </header>

            <main className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-6 text-white">
                Recent Posts
              </h2>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border-b border-gray-700 pb-6 mb-6"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-white">John Doe</p>
                      <p className="text-sm text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{post.content}</p>
                  <div className="flex justify-between text-gray-300 text-sm">
                    <button className="hover:text-indigo-400 transition">
                      Like
                    </button>
                    <button className="hover:text-indigo-400 transition">
                      Comment
                    </button>
                    <button className="hover:text-indigo-400 transition">
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
