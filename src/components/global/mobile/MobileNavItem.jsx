import React from "react";
import navItems from "../../../Data/navItems.json";
import { NavLink } from "react-router";

export const MobileNavItem = () => {
  return (
    <nav className="w-full mt-2">
      <ul className="space-y-1 w-full">
        {navItems.map((item) => (
          <li key={item._id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `block px-5 py-2 transition-all duration-300 
                 ${
                   isActive
                     ? "bg-primary/90 text-white shadow-md font-medium"
                     : "text-gray-700 hover:bg-gray-100 text-sm"
                 }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
