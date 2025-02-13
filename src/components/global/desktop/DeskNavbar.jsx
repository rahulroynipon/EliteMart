import Container from "../Container";
import navItems from "../../../Data/navItems.json";
import { DeskCategory } from "./DesKCategory";
import { NavLink, useLocation } from "react-router";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import cn from "../../../utils/cn";

const DeskNavbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="bg-primary">
      <Container>
        <ul className="flex space-x-8 items-center text-white/95 font-medium h-12 ">
          <li className="w-[20rem] text-center bg-green-900 py-3 group">
            <button className="flex items-center px-6 justify-between w-full">
              <span className="flex items-center space-x-5">
                <AiOutlineMenu />
                <span className="font-semibold"> Categories</span>
              </span>
              <MdOutlineArrowForwardIos />
            </button>
            <div
              className={cn(
                "absolute mt-3  w-[20rem] bg-white shadow-md border border-gray-300 hidden ",
                isHome ? "block" : "group-hover:block"
              )}
            >
              <DeskCategory />
            </div>
          </li>
          {navItems?.map((item) => (
            <li key={item._id} className="shrink-0">
              <NavLink to={item.link} className="px-3 py-3">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default DeskNavbar;
