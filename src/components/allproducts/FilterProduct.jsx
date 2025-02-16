import { useState } from "react";
import useDBStore from "../../store/DB";
import { IoMdClose } from "react-icons/io";
import cn from "../../utils/cn";

export const FilterProduct = ({ isOpen = "true", onClose }) => {
  const { categories, brands } = useDBStore();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBrandChange = (brandId) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brandId)
        ? prevSelectedBrands.filter((id) => id !== brandId)
        : [...prevSelectedBrands, brandId]
    );
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrands([]);
  };

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-screen w-[17rem] z-40 bg-white border border-gray-200 shadow-md transition-transform duration-300 lg:static lg:z-0 lg:w-full lg:h-full lg:translate-x-0",
        isOpen ? "translate-x-0" : "translate-x-full "
      )}
    >
      {/* Header with Close & Reset */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray/40">
        <button
          onClick={resetFilters}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={onClose}
          className="p-1 rounded-full lg:hidden text-gray-500 cursor-pointer hover:bg-gray-200"
        >
          <IoMdClose size={20} />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto">
        {/* Categories Section */}
        <div>
          <h5 className="font-semibold text-lg mb-2">Categories</h5>
          <ul className="flex flex-col gap-1">
            {categories?.length > 0 ? (
              categories.map((item) => (
                <li
                  key={item?._id}
                  className="flex items-center gap-2 font-medium text-gray-600 ml-3"
                >
                  <input
                    type="radio"
                    id={`category-${item?._id}`}
                    name="category"
                    value={item?._id}
                    checked={selectedCategory === item?._id}
                    onChange={() => handleCategoryChange(item?._id)}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={`category-${item?._id}`}
                    className="cursor-pointer capitalize"
                  >
                    {item?.label}
                  </label>
                </li>
              ))
            ) : (
              <p className="text-gray-400">No categories available</p>
            )}
          </ul>
        </div>

        {/* Brands Section */}
        <div>
          <h5 className="font-semibold text-lg mb-2">Brands</h5>
          <ul className="flex flex-col gap-1">
            {brands?.length > 0 ? (
              brands.map((item) => (
                <li
                  key={item?._id}
                  className="flex items-center gap-2 font-medium text-gray-600 ml-3"
                >
                  <input
                    type="checkbox"
                    id={`brand-${item?._id}`}
                    value={item?._id}
                    checked={selectedBrands.includes(item?._id)}
                    onChange={() => handleBrandChange(item?._id)}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={`brand-${item?._id}`}
                    className="cursor-pointer capitalize"
                  >
                    {item?.name}
                  </label>
                </li>
              ))
            ) : (
              <p className="text-gray-400">No brands available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
