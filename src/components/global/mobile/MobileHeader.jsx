import { useEffect, useState, useRef } from "react";
import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "../../../assets/logo.png";
import cn from "../../../utils/cn";
import { useNavigate } from "react-router";

const MobileHeader = ({ onOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "py-3 bg-white transition-all duration-300 ease-in-out",
        isSticky
          ? "fixed top-0 left-0 w-full z-30 shadow-lg backdrop-blur-md"
          : "border border-gray/30"
      )}
    >
      <Container className="flex items-center justify-between px-8 md:px-20 relative">
        <button onClick={onOpen}>
          <AiOutlineMenu size={25} className="cursor-pointer" />
        </button>
        <img
          onClick={goToHome}
          className="h-16 object-contain cursor-pointer"
          src={Logo}
          alt="Elite Mart Logo"
        />
        <div ref={searchRef} className="relative w-7">
          {!isSearchOpen ? (
            <IoSearch
              size={25}
              className="cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            />
          ) : (
            <div
              className="absolute right-0 top-0 flex items-center bg-white shadow-md rounded-full
            border-1 border-primary px-5 py-2 w-[17rem] md:w-[30rem]"
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-gray-700"
                autoFocus
              />
              <IoClose
                size={20}
                className="cursor-pointer text-gray-500"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default MobileHeader;
