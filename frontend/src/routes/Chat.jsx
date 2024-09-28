import React, { useState } from "react";
import ChatList from "../components/ChatList";
import ChatArea from "../components/ChatArea";

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <ChatList onSelectContact={setSelectedContact} />
      <ChatArea selectedContact={selectedContact} />
    </div>
  );
};

export default Chat;
