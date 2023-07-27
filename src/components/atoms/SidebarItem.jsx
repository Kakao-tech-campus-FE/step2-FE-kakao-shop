import React from "react";

const SidebarItem = ({ menu }) => {
  return (
    <div className="flex rounded-lg hover:bg-gray-300 p-3 my-2 transition">
      <img width={20} src={menu.icon} alt="icon" />
      <div className="ml-3">{menu.name}</div>
    </div>
  );
};

export default SidebarItem;
