import React, { useState } from "react";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

function SidebarWithCta() {
  const [isExpanded, setIsExpanded] = useState(false); // State to handle sidebar collapse/expand

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded); // Toggle the sidebar state
  };

  return (
    <div className="fixed top-16 left-0 h-full bg-gray-900 shadow-lg z-10"> {/* Adjusted top for header */}
      <Card
        className={`h-full transition-all duration-300 bg-gray-800 ${
          isExpanded ? "w-64" : "w-20"
        }`} // Sidebar expands to 64px width
      >
        <button
          className="text-white p-2 focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Toggle Button */}
          {isExpanded ? "<" : ">"}
        </button>
        <List className="space-y-6 mt-4">
          <ListItem className="flex items-center">
            <ListItemPrefix>
              <PresentationChartBarIcon
                className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300"
              />
            </ListItemPrefix>
            {isExpanded && <span className="text-white ml-4">Dashboard</span>} {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <ListItemPrefix>
              <ShoppingBagIcon
                className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300"
              />
            </ListItemPrefix>
            {isExpanded && <span className="text-white ml-4">E-Commerce</span>} {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <ListItemPrefix>
              <InboxIcon
                className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300"
              />
            </ListItemPrefix>
            {isExpanded && <span className="text-white ml-4">Inbox</span>} {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <ListItemPrefix>
              <UserCircleIcon
                className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300"
              />
            </ListItemPrefix>
            {isExpanded && <span className="text-white ml-4">Profile</span>} {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <ListItemPrefix>
              <Cog6ToothIcon
                className="h-8 w-8 text-white hover:scale-125 hover:text-blue-500 transition-transform duration-300"
              />
            </ListItemPrefix>
            {isExpanded && <span className="text-white ml-4">Settings</span>} {/* Label */}
          </ListItem>

          <ListItem className="flex items-center">
            <ListItemPrefix>
              <PowerIcon
                className="h-8 w-8 text-white hover:scale-125 hover:text-red-500 transition-transform duration-300"
              />
            </ListItemPrefix>
            {isExpanded && <span className="text-white ml-4">Log Out</span>} {/* Label */}
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default SidebarWithCta;
