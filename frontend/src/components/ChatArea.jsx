import React, { useState } from "react";
import { Send, Paperclip, Smile } from "lucide-react";

const ChatArea = ({ selectedContact }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (!selectedContact) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-500">
          Select a contact to start chatting
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-gray-200 flex items-center">
        <img
          src="/api/placeholder/40/40"
          alt={selectedContact.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold">{selectedContact.name}</h2>
          <p className="text-sm text-gray-600">Online</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-[#e5ddd5]">
        {/* Chat messages would go here */}
      </div>
      <form onSubmit={handleSend} className="p-4 bg-gray-200 flex items-center">
        <button type="button" className="mr-2">
          <Smile size={24} className="text-gray-600" />
        </button>
        <button type="button" className="mr-2">
          <Paperclip size={24} className="text-gray-600" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 py-2 px-4 bg-white rounded-full focus:outline-none"
        />
        <button type="submit" className="ml-2">
          <Send size={24} className="text-gray-600" />
        </button>
      </form>
    </div>
  );
};

export default ChatArea;
