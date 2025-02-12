import React, { useMemo } from "react";
import Categories from "../../Data/top-category.json";
import { CategoryCard } from "../ui/CategoryCard";
import useIsMobile from "../../hook/useIsMobile";
import Container from "../global/Container";

const TopSection = () => {
  const isMobile = useIsMobile();

  const filteredCategories = useMemo(() => {
    return isMobile ? Categories.slice(0, 6) : Categories;
  }, [isMobile]);

  return (
    <Container className="flex-col space-y-5">
      <h3 className="w-full  text-base md:text-xl font-semibold  text-gray-700">
        Top Categories
      </h3>
      <div className="w-full grid grid-cols-3 md:grid-cols-7 gap-1 md:gap-0 items-center">
        {filteredCategories.map((item) => (
          <CategoryCard key={item?._id} category={item} />
        ))}
      </div>
    </Container>
  );
};

export default TopSection;
