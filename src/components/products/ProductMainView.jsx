import { useState } from "react";
import { StarRating } from "../ui/StarRating";
import { HiMinusSmall } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GiPowerLightning } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import useDBStore from "../../store/DB";
import LazyImage from "../../utils/LazyImage";
import { motion } from "framer-motion";

const ProductMainView = () => {
  const { selectedProduct: product = {} } = useDBStore();

  const [order, setOrder] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const discountPrice = (product?.price || 0) - (product?.discount || 0);

  const incrementOrder = () =>
    setOrder((prev) => (product?.instock > prev ? prev + 1 : prev));
  const decrementOrder = () => setOrder((prev) => (prev > 0 ? prev - 1 : 0));

  const services = [
    {
      _id: 1,
      title: "Free Shipping",
      description: "Free shipping on all orders",
      icon: <TbTruckDelivery size={35} />,
    },
    {
      _id: 2,
      title: "Customer Support",
      description: "24/7 customer support",
      icon: <BiSupport size={35} />,
    },
    {
      _id: 3,
      title: "Secure Payment",
      description: "100% secure payment",
      icon: <RiSecurePaymentFill size={35} />,
    },
    {
      _id: 4,
      title: "Warranty",
      description: "1-year warranty",
      icon: <FaAward size={30} />,
    },
  ];

  return (
    <div className="z-0 w-full bg-white border border-gray-300 flex flex-col lg:flex-row shadow-sm overflow-hidden p-4 md:p-6 lg:p-8 space-y-5 lg:space-y-0 lg:space-x-5">
      {/* Image Section */}
      <div className=" w-full flex flex-col space-y-3">
        {/* product Image*/}

        <div className=" lg:max-h-[29rem] lg:min-h-[25rem] w-full border border-gray-300 flex items-center justify-center overflow-hidden">
          <motion.img
            key={selectedImage}
            src={product?.images[selectedImage]}
            alt={product?.title}
            className="transition-transform duration-500 hover:scale-110 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* product short images */}
        <div className="flex flex-wrap gap-2">
          {product?.images?.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-[6rem] h-[6rem] shrink-0 overflow-hidden
                flex items-center justify-center cursor-pointer border transition-all duration-300 ${
                  selectedImage === index
                    ? "border-primary border-2 scale-105"
                    : "border-gray-300"
                }`}
            >
              <LazyImage
                src={image}
                alt={product?.title}
                className="transition-transform duration-500 hover:scale-105 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-full lg:w-[40rem] space-y-5">
        <h2 className="font-semibold text-lg text-gray-800 leading-tight">
          {product?.title || "Product Name"}
        </h2>

        {/* Ratings Section */}
        <div className="flex items-center space-x-2">
          <StarRating rating={product?.rating || 0} />
          <p className="text-gray-600 text-sm">
            {product?.rating || 0} Ratings out of {product?.numOrders || 0}{" "}
            orders
          </p>
        </div>

        {/* Brand & Price Section */}
        <div className="space-y-1 text-gray-700 font-semibold">
          <p>
            <span className="font-medium">Brand:</span>
            <span className="ml-2 capitalize">{product?.brand || "N/A"}</span>
          </p>
          <p>
            <span className="font-medium">Price:</span>
            <span className="ml-2 font-semibold text-xl text-primary">
              {discountPrice} TK
            </span>
            {product?.discount > 0 && (
              <span className="ml-2 text-red-500 line-through">
                {product?.price} TK
              </span>
            )}
          </p>
        </div>

        {/* Stock & Quantity Selector */}
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-medium">In Stock:</span>
            {product?.instock > 0 ? (
              <span className="text-sm text-gray-500 ml-2">
                {product?.instock} copies available
              </span>
            ) : (
              <span className="text-sm text-red-500 ml-2">Out of stock</span>
            )}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={decrementOrder}
              className={`h-11 w-11 border flex items-center justify-center transition-all ${
                order === 0
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-200 cursor-pointer"
              }`}
              disabled={order === 0}
            >
              <HiMinusSmall size={20} />
            </button>
            <div className="h-11 w-11 flex items-center justify-center bg-gray-200 text-lg font-medium">
              {order}
            </div>
            <button
              onClick={incrementOrder}
              className={`h-11 w-11 border flex items-center justify-center transition-all ${
                product?.instock === 0
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-200 cursor-pointer"
              }`}
              disabled={product?.instock === 0}
            >
              <FiPlus size={20} />
            </button>
          </div>

          {/* Add to Cart & Buy Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              className={`px-4 py-2 bg-amber-500 text-white flex items-center justify-center w-36 hover:bg-amber-600 transition-all duration-300 h-10 text-sm font-medium
                ${
                  product?.instock === 0
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              disabled={product?.instock === 0}
            >
              <BsCart3 size={20} className="mr-2" /> Add To Cart
            </button>
            <button
              className={`px-4 py-2 bg-primary text-white flex items-center justify-center w-36 hover:bg-primary/50 transition-all duration-300 h-10 text-sm font-medium ${
                product?.instock === 0
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              disabled={product?.instock === 0}
            >
              <GiPowerLightning size={20} className="mr-2" /> Buy Now
            </button>
          </div>

          {/* Services Section */}
          <ul className="flex flex-col gap-3 mt-5 text-gray-700">
            {services.map((item) => (
              <li key={item?._id} className="flex items-center space-x-3 mt-1">
                <div className="text-gray-500 w-10">{item?.icon}</div>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">{item?.title}</span>
                  <span className="text-sm text-gray-500">
                    {item?.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductMainView;
