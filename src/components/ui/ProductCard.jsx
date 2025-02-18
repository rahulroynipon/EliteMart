import PropTypes from "prop-types";
import { StarRating } from "./StarRating";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router";
import LazyImage from "../../utils/LazyImage";

export const ProductCard = ({ product }) => {
  const discountedPrice = product.discount
    ? product.price - product.discount
    : product.price;

  const productName = product?.name?.replace(/ /g, "-").toLowerCase();
  const productLink = `/product/${product?.category?.categoryTypeId}/${product?.category?.categoryId}/${productName}/${product?._id}`;

  return (
    <div
      className="w-full border border-gray-200 bg-white
       hover:ring-1 ring-primary/20 transition-all duration-300 hover:shadow-lg"
    >
      <Link to={productLink}>
        <div className="h-[13rem] overflow-hidden relative bg-gray-200 flex justify-center items-center">
          <LazyImage
            src={product?.images[0]}
            alt={product?.title}
            className="transition-transform duration-500 hover:scale-105 shadow-md"
          />
          {product.discount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[13px] px-2 py-1">
              ৳{product.discount} OFF
            </span>
          )}
        </div>
      </Link>

      <div className="px-3 py-4">
        <StarRating rating={Math.ceil(product.rating || 0)} />

        <p className="space-x-3 mt-2 cursor-default">
          <span className="text-lg font-semibold text-primary">
            ৳{discountedPrice}
          </span>
          {product.discount > 0 && (
            <span className="text-sm line-through text-red-500">
              ৳{product.price}
            </span>
          )}
        </p>

        <Link
          to={productLink}
          className="mt-2 text-gray-600 line-clamp-2 hover:text-primary cursor-pointer 
        transition-all duration-200 tracking-tight font-medium  text-sm md:text-base"
        >
          {product.title}
        </Link>

        <div className="mt-4 w-full flex items-center space-x-2">
          <button
            className="flex items-center justify-center cursor-pointer group hover:bg-primary/70
            border-2 border-primary/50 transition-all duration-300 h-10 w-12 shrink-0"
            title="Add to Cart"
          >
            <BsCart3
              size={20}
              className="text-primary group-hover:text-white transition-all duration-300"
            />
          </button>
          <button
            className="px-3 py-2 border bg-primary text-white cursor-pointer
           hover:bg-primary/50   font-medium transition-all duration-300 h-10 w-full text-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};
