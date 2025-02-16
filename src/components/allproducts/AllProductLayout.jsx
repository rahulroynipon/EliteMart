import { useState, useRef, useEffect } from "react";
import useDBStore from "../../store/DB";
import Container from "../global/Container";
import { ProductCard } from "../ui/ProductCard";
import { FilterProduct } from "./FilterProduct";
import { FaFilter } from "react-icons/fa6";

export const AllProductLayout = () => {
  const { products } = useDBStore();
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  const onOpenFilter = () => {
    setIsOpen(true);
  };

  const onCloseFilter = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        onCloseFilter();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container className="flex flex-col lg:flex-row items-start space-y-10 md:space-x-4 lg:mt-16">
      <div
        ref={filterRef}
        className="lg:w-[20rem] lg:sticky lg:top-32 shrink-0"
      >
        <FilterProduct isOpen={isOpen} onClose={onCloseFilter} />
      </div>

      <section className="w-full lg:w-[calc(100%-20rem)]">
        <button
          onClick={onOpenFilter}
          className="cursor-pointer flex items-center border px-4 py-1 mb-3 
          space-x-3 bg-primary hover:bg-primary/90 duration-300 transition-all text-white font-medium lg:hidden"
        >
          <FaFilter />
          <span> Filter</span>
        </button>
        <div className="grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4 gap-2">
          {products?.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </section>
    </Container>
  );
};
