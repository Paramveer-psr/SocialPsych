import React, { useState } from "react";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ChatBubbleLeftIcon,
  UserCircleIcon,
  PencilSquareIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false); // State to handle sidebar collapse/expand

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded); // Toggle the sidebar state
  };

  return (
    <div className="fixed top-16 left-0 h-full bg-gray-900 shadow-lg z-10">
      {" "}
      {/* Adjusted top for header */}
      <Card
        className={`h-full transition-all duration-300 bg-gray-800 ${
          isExpanded ? "w-64" : "w-20"
        }`} // Sidebar expands to 64px width
      >
        {/* <button
          className="text-white p-2 focus:outline-none"
          onClick={toggleSidebar}
        >
         
          {isExpanded ? "<" : ">"}
        </button> */}
        <List className="space-y-6 mt-4">
          <ListItem className="flex items-center">
            <Link to="/">
              <ListItemPrefix>
                <HomeIcon className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300" />
              </ListItemPrefix>
            </Link>
            {isExpanded && <span className="text-white ml-4">Dashboard</span>}{" "}
            {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <Link to="/create">
              <ListItemPrefix>
                <PencilSquareIcon className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300" />
              </ListItemPrefix>
            </Link>
            {isExpanded && <span className="text-white ml-4">E-Commerce</span>}{" "}
            {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <Link to="/chat">
              <ListItemPrefix>
                <ChatBubbleLeftIcon className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300" />
              </ListItemPrefix>
            </Link>
            {isExpanded && <span className="text-white ml-4">Inbox</span>}{" "}
            {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <Link to="/profile">
              <ListItemPrefix>
                <UserCircleIcon className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300" />
              </ListItemPrefix>
            </Link>
            {isExpanded && <span className="text-white ml-4">Profile</span>}{" "}
            {/* Label */}
          </ListItem>

          <ListItem>
            <Avatar />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default Sidebar;
