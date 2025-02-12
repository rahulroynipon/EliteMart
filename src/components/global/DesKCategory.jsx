import { useState } from "react";
import categoryList from "../../Data/category.json";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const images = import.meta.glob("/src/assets/category/*.{png,jpg}", {
  eager: true,
});

export const DeskCategory = () => {
  const [activeType, setActiveType] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="relative">
      <ul onMouseLeave={() => setActiveType(null)}>
        {categoryList.map((type, index) => {
          const imageSrc =
            images[`/src/assets/category/${type.image}`]?.default || type.image;

          return (
            <li
              key={type._id}
              className="relative flex items-center justify-between py-2 px-6 cursor-pointer hover:bg-gray-100"
              onMouseEnter={() => setActiveType(type._id)}
            >
              <div className="flex items-center space-x-4">
                <img
                  className="h-6 w-6 object-contain"
                  src={imageSrc}
                  alt={`category-${index}`}
                />
                <p className="font-medium text-gray-700">{type.label}</p>
              </div>

              {type.categories && (
                <MdOutlineArrowForwardIos className="text-gray-600" />
              )}

              {/* Category Menu (Opens when hovering on Type) */}
              {type.categories && activeType === type._id && (
                <ul
                  className="absolute left-full top-0 bg-white shadow-md border border-gray-300 min-w-64 max-w-80"
                  onMouseLeave={() => setActiveCategory(null)} // Close subcategory menu
                >
                  {type.categories.map((category) => (
                    <li
                      key={category._id}
                      className="relative px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onMouseEnter={() => setActiveCategory(category._id)}
                    >
                      <div className="flex items-center justify-between">
                        {category.label}
                        {category.subCategories && (
                          <MdOutlineArrowForwardIos className="text-gray-600" />
                        )}
                      </div>

                      {/* Subcategory Menu (Opens when hovering on Category) */}
                      {category.subCategories &&
                        activeCategory === category._id && (
                          <ul className="absolute left-full top-0 bg-white shadow-md border border-gray-300 min-w-64 max-w-80">
                            {category.subCategories.map((subCategory) => (
                              <li
                                key={subCategory._id}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};
