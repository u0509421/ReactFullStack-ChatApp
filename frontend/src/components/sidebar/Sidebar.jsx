import React from "react";
import SearchInput from "./searchinput"; // Adjust the path as necessary
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton"; // Adjust the path as necessary

const sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default sidebar;
