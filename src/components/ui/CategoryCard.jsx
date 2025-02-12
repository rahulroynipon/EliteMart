import React from "react";
import PropTypes from "prop-types";


const images = import.meta.glob("/src/assets/category/*.png", { eager: true });

export const CategoryCard = ({ category }) => {
  const imageSrc =
    images[`/src/assets/category/${category.image}`]?.default || category.image;
  return (
    <div
      className="p-3 h-[7rem] md:h-[9rem] flex flex-col items-center justify-between bg-white border
     border-gray/20 shadow-xs cursor-pointer transition-all duration-300 hover:shadow-xl  hover:border-primary/50"
    >
      <div className="h-[4rem] md:h-[5rem]">
        <img className="h-full w-auto" src={imageSrc} alt={category._id} />
      </div>

      <h4 className="font-semibold text-[10px] md:text-xs text-center text-gray-700">
        {category.label}
      </h4>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
