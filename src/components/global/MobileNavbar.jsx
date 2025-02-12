import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { NavLink } from "react-router";

const navItems = [
  { _id: "home", label: "Home", icon: <FaHome />, link: "/" },
  { _id: "cart", label: "Cart", icon: <IoMdCart />, link: "/cart" },
  {
    _id: "category",
    label: "Category",
    icon: <BiSolidCategory />,
    link: "/categories",
  },
  { _id: "login", label: "Login", icon: <FaUserAlt />, link: "/login" },
];

const MobileNavbar = () => {
  return (
    <nav className="w-full bg-white fixed bottom-0 z-40 px-8 md:px-20 shadow-lg border-t border-gray-200">
      <ul className="flex justify-between items-center w-full py-4">
        {navItems.map(({ _id, label, icon, link }) => (
          <li key={_id}>
            <NavLink
              to={link}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 transition-all duration-300 ${
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }`
              }
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-medium">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
