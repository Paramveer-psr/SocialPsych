import React, { useState } from "react";

const ProfilePage = () => {
  const [followers, setFollowers] = useState(500);
  const [following, setFollowing] = useState(300);
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "This is my first post!",
      timestamp: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      content: "Loving the new React updates!",
      timestamp: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
      likes: 20,
      comments: 8,
    },
    {
      id: 3,
      content: "Another day, another post!",
      timestamp: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      likes: 15,
      comments: 6,
    },
    {
      id: 4,
      content: "Check out my new blog post!",
      timestamp: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
      likes: 25,
      comments: 10,
    },
  ]);

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
    <>
      <div className="min-h-screen bg-gray-900 text-white flex">
        <div className="flex-1 p-6 lg:pl-10 lg:pr-10 bg-gray-900 lg:pl-40 lg:pr-40">
          <header className="w-full bg-gray-800 rounded-lg shadow-lg mb-10">
            <div className="flex items-center flex-wrap">
              <div className="relative flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1614914135224-925593607248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-lg"
                />
                <span className="absolute bottom-0 right-0 bg-green-400 w-6 h-6 rounded-full border-2 border-gray-900"></span>
              </div>
              <div className="ml-7 flex-1">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-gray-400">@johndoe</p>
                <p className="mt-2 text-gray-500">
                  Web Developer • Tech Enthusiast • Coffee Lover
                </p>
              </div>
            </div>
            <div className="flex justify-evenly mt-4 space-x-6">
              <div className="text-center">
                <p className="text-2xl font-semibold text-white">{followers}</p>
                <p className="text-gray-400">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-white">{following}</p>
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

          {/* Display posts in a grid */}
          <main className="w-full bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-xl font-semibold mb-6 text-white">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-900 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold text-white">John Doe</p>
                        <p className="text-sm text-gray-400">
                          {post.timestamp}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-auto mb-4 rounded-lg"
                      />
                    )}
                  </div>
                  <button
                    onClick={() => handleShare(post.content)}
                    className="self-center hover:text-indigo-400 transition"
                  >
                    Share
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
