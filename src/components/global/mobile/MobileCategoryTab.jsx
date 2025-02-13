import React, { useState } from "react";
import Categories from "../../../Data/category.json";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const images = import.meta.glob("/src/assets/category/*.png", { eager: true });

export const MobileCategoryTab = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openSubCategories, setOpenSubCategories] = useState({});

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    setOpenSubCategories({});
  };

  const handleSubCategoryClick = (subCategoryId) => {
    setOpenSubCategories((prev) => ({
      ...prev,
      [subCategoryId]: !prev[subCategoryId],
    }));
  };

  return (
    <div className="flex">
      {/* Sidebar with Category Icons */}
      <div className="w-[7rem] max-h-[calc(100svh-7rem)] shrink-0  py-4 overflow-y-auto bg-gray-100">
        <ul className="flex flex-col items-center gap-3 w-full justify-center">
          {Categories.map((categoryType) => {
            const imagePath = `/src/assets/category/${categoryType.image}`;
            const imageSrc = images[imagePath]?.default || categoryType.image;

            return (
              <li key={categoryType._id}>
                <button
                  onClick={() => handleCategoryClick(categoryType._id)}
                  className={`text-xs md:text-sm pb-1 w-[7rem] transition-colors flex flex-col items-center justify-center ${
                    selectedCategory === categoryType._id
                      ? "bg-primary text-white font-medium"
                      : ""
                  }`}
                >
                  <span>
                    <img
                      className="h-10 w-10 object-cover"
                      src={imageSrc}
                      alt={categoryType.label}
                    />
                  </span>
                  <span>{categoryType.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Category List */}
      <div className="w-[13rem] max-h-[calc(100svh-7rem)] p-4 overflow-y-auto">
        {!selectedCategory ? (
          <ul className="space-y-2">
            {Categories?.map((categoryType) =>
              categoryType?.categories?.map((category) => (
                <li
                  key={category._id}
                  className="text-gray-700 border-b py-2 text-sm border-gray-300"
                >
                  {category.label}
                </li>
              ))
            )}
          </ul>
        ) : (
          <ul className="space-y-2">
            {Categories.find(
              (cat) => cat._id === selectedCategory
            )?.categories?.map((category) => (
              <li key={category._id} className="border-b border-gray-300">
                <button
                  onClick={() =>
                    category?.subCategories &&
                    handleSubCategoryClick(category._id)
                  }
                  className="flex justify-between items-center w-full text-left text-gray-700 text-sm py-2"
                >
                  <span>{category.label}</span>
                  {category?.subCategories && (
                    <MdOutlineArrowForwardIos
                      className={`transition-transform ${
                        openSubCategories[category._id] ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Subcategory List */}
                {category?.subCategories && openSubCategories[category._id] && (
                  <ul className="pl-4">
                    {category?.subCategories.map((subCategory) => (
                      <li
                        key={subCategory._id}
                        className="text-gray-600 text-sm py-1"
                      >
                        {subCategory.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
