import { Link } from "react-router";
import { StarRating } from "./StarRating";
import LazyImage from "../../utils/LazyImage";

export const RelatedProductCard = ({ product }) => {
  const discountedPrice = product.discount
    ? product.price - product.discount
    : product.price;

  const productName = product?.name?.replace(/ /g, "-").toLowerCase();
  const productLink = `/product/${product?.category?.categoryTypeId}/${product?.category?.categoryId}/${productName}/${product?._id}`;

  return (
    <Link
      to={productLink}
      className="h-30 border-y border-gray/20  flex space-x-3  bg-white"
    >
      <div className="h-full w-28 shrink-0 bg-gray-200 overflow-hidden ">
        <LazyImage
          src={product?.images[0]}
          div
          alt={product.title}
          className="transition-transform duration-300 hover:scale-105 shadow-md"
        />
      </div>

      <div className="w-full flex flex-col justify-between py-3 pr-2">
        <p className="text-sm line-clamp-2 font-medium text-gray-900 cursor-pointer hover:text-primary transition-colors">
          {product?.title}
        </p>

        <StarRating rating={product?.rating} />

        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-600">Price: </span>
          <span className="font-semibold text-primary">
            Tk.{discountedPrice}
          </span>
          {product?.discount > 0 && (
            <span className="ml-2 text-red-500 line-through text-xs">
              Tk.{product?.price}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};
