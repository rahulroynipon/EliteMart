import { Link } from "react-router";
import useDBStore from "../../store/DB";
import { StarRating } from "../ui/StarRating";

export const SearchProduct = ({ onClose }) => {
  const { searchProducts: products } = useDBStore();

  return (
    <section className="absolute z-40 bg-white top-full shadow-2xl w-full h-[25rem] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 h-12 flex items-center px-4 bg-white shadow-sm">
        <h3 className="font-medium">
          <span className="text-gray-700"> Search Products </span>
          <span className="text-primary font-semibold">
            {" "}
            ({products?.length || 0})
          </span>
        </h3>
      </div>

      {/* Conditional rendering for products */}

      <ul className="px-4 py-3">
        {products?.map((product) => {
          const productName = product?.name?.replace(/ /g, "-").toLowerCase();
          const productLink = `/product/${product?.category?.categoryTypeId}/${product?.category?.categoryId}/${productName}/${product?._id}`;

          return (
            <li key={product._id}>
              <Link
                to={productLink}
                onClick={onClose}
                className="cursor-pointer group flex space-x-4 hover:bg-gray-100 transition-all duration-300 p-2"
              >
                {/* Product Image Placeholder */}
                <div className="h-16 w-20 shrink-0 bg-gray-200"></div>

                {/* Product Title */}
                <div className="">
                  <p className="py-1 text-sm text-gray-600 group-hover:text-primary transition-all duration-300">
                    {product.title}
                  </p>
                  <StarRating rating={product?.rating} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
