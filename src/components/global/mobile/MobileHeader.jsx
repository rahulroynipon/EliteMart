import { useEffect, useState, useRef } from "react";
import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "../../../assets/logo.png";
import cn from "../../../utils/cn";
import { useNavigate } from "react-router";
import { SearchProduct } from "../SearchProduct";
import useDBStore from "../../../store/DB";

const MobileHeader = ({ onOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const { getProductBySearch, searchProducts } = useDBStore();

  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    getProductBySearch(searchItem);
  }, [searchItem, getProductBySearch]);

  const goToHome = () => {
    navigate("/");
  };

  const searchTextHandler = (e) => {
    setSearchItem(e.target.value);
  };

  const resetTextHandler = () => {
    setSearchItem("");
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        resetTextHandler();
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
              className="absolute right-0 top-0 flex items-center bg-white shadow-md 
            border-1 border-primary px-5 py-2 w-[20rem] md:w-[40rem] "
            >
              <input
                value={searchItem}
                onChange={searchTextHandler}
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

              {searchProducts?.length ? (
                <SearchProduct
                  onClose={resetTextHandler}
                  className="right-0 top-11"
                />
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default MobileHeader;
