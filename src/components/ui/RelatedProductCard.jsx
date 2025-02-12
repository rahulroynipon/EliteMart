import { Link } from "react-router";
import { StarRating } from "./StarRating";

export const RelatedProductCard = () => {
  const product = {
    _id: 2,
    name: "Soft-And-Warm-Hoodie-Perfect-For-All-Seasons",
    image: "/assets/products/hoodie.jpg",
    title: "Soft and warm hoodie perfect for all seasons",
    price: 2500,
    discount: 300,
    rating: 4,
  };

  return (
    <div className="h-30 border-y border-gray/20  flex space-x-3">
      <div className="h-full w-28 shrink-0 bg-gray-200 overflow-hidden ">
        {/* <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        /> */}
      </div>

      <div className="w-full flex flex-col justify-between py-3">
        <p className="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary transition-colors">
          <Link to={`/product/${product.name}`}> {product.title}</Link>
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-600">Price: </span>
          <span className="font-semibold text-primary">Tk.{product.price}</span>
          {product.discount > 0 && (
            <span className="ml-2 text-red-500 line-through text-xs">
              Tk.{product.price + product.discount}
            </span>
          )}
        </p>

        <StarRating rating={product.rating} />
      </div>
    </div>
  );
};
