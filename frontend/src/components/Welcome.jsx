import React, { useState, useEffect } from "react";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchUserName = async () => {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      setUserName(user?.username || "");
    };
    fetchUserName();
  }, []);

  return (
    <div
      className="flex flex-col  bg-gray-900
     items-center justify-center text-white min-w-48"
    >
      <img src={Robot} alt="" className="h-80" />
      <h1 className="text-center text-2xl">
        Welcome, <span className="text-[#4e0eff]">{userName}!</span>
      </h1>
      <h3 className="text-center text-lg mt-2">Please enter your details</h3>
    </div>
  );
}
