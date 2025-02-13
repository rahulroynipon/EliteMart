import Container from "../Container";
import Logo from "../../../assets/logo.png";
import { BsCart3 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import cn from "../../../utils/cn";

const DeskHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 400;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "py-2 bg-light-gray transition-all duration-300 ease-in-out",
        isSticky ? "sticky top-0 z-30 shadow-lg backdrop-blur-md " : ""
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
            src={Logo}
            alt="Elite Mart Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-[25rem] lg:max-w-[30rem] flex bg-white">
          <input
            type="text"
            placeholder="Search your products..."
            className="h-12 w-full px-4 py-2 border outline-none bg-white focus:border-2 border-primary"
          />
          <button
            className="w-14 h-12 flex items-center justify-center bg-primary text-white  
            transition-all duration-300 hover:bg-primary/70 cursor-pointer"
            aria-label="Search"
          >
            <IoSearch size={22} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-gray-700">
          <button
            aria-label="Wishlist"
            className="hover:text-primary transition"
          >
            <GiSelfLove size={28} />
          </button>
          <button aria-label="Cart" className="hover:text-primary transition">
            <BsCart3 size={28} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default DeskHeader;
