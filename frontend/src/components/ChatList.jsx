// File: src/components/ChatList.jsx
import React, { useState } from "react";
import { Search, MoreVertical } from "lucide-react";

const initialContacts = [
  { id: 1, name: "Alice", lastMessage: "Hey, how are you?", time: "10:30 AM" },
  {
    id: 2,
    name: "Bob",
    lastMessage: "Can we meet tomorrow?",
    time: "Yesterday",
  },
  { id: 3, name: "Charlie", lastMessage: "Sure, no problem!", time: "Tuesday" },
  {
    id: 4,
    name: "David",
    lastMessage: "Did you see the game last night?",
    time: "Monday",
  },
  {
    id: 5,
    name: "Eve",
    lastMessage: "Thanks for your help!",
    time: "Last week",
  },
];

const ChatList = ({ onSelectContact }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setContacts(initialContacts);
    } else {
      const filteredContacts = initialContacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(term) ||
          contact.lastMessage.toLowerCase().includes(term)
      );
      setContacts(filteredContacts);
    }
  };

  return (
    <div className="w-1/3 border-r border-gray-300 bg-white flex flex-col">
      <div className="p-4 bg-gray-200 flex justify-between items-center">
        <img
          src="/api/placeholder/40/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex space-x-4">
          <button>
            <MoreVertical size={24} />
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full py-2 px-4 pl-10 bg-gray-100 rounded-full focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelectContact(contact)}
            >
              <img
                src="/api/placeholder/50/50"
                alt={contact.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{contact.name}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {contact.lastMessage}
                </p>
              </div>
              <span className="text-xs text-gray-500">{contact.time}</span>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No contacts found</div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
