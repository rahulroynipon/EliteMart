import React from "react";
import PropTypes from "prop-types";

const images = import.meta.glob("/src/assets/*.png", { eager: true });

export const CategoryCard = ({ category }) => {
  const imageSrc =
    images[`/src/assets/${category.image}`]?.default || category.image;

  return (
    <div
      className="p-3 h-[10rem] flex flex-col items-center justify-between bg-white border
     border-gray/20 rounded-lg shadow-xs cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-gray/40"
    >
      <div className="h-[6rem]">
        <img className="h-full w-auto" src={imageSrc} alt={category._id} />
      </div>

      <h4 className="font-semibold text-xs text-center text-gray-700">
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
