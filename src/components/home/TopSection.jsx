import React, { useMemo } from "react";
import Categories from "../../Data/top-category.json";
import { CategoryCard } from "../ui/CategoryCard";
import useIsMobile from "../../hook/useIsMobile";

const TopSection = () => {
  const isMobile = useIsMobile();

  const filteredCategories = useMemo(() => {
    return isMobile ? Categories.slice(0, 6) : Categories;
  }, [isMobile]);

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-3 md:grid-cols-7 gap-2 px-5 items-center">
        {filteredCategories.map((item) => (
          <CategoryCard key={item?._id} category={item} />
        ))}
      </div>
    </section>
  );
};

export default TopSection;
