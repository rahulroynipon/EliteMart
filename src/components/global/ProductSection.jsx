import PropTypes from "prop-types";
import { ProductCard } from "../ui/ProductCard";
import { Link } from "react-router";
import Container from "./Container";

const ProductSection = ({ title, products, viewAllLink }) => {
  return (
    <Container className="flex-col space-y-5">
      {/* Header Section */}
      <div className="w-full flex items-center justify-between flex-wrap">
        <h3 className="text-base md:text-xl font-semibold text-gray-700">
          {title}
        </h3>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className=" text-sm md:text-base font-medium text-blue-600 hover:underline px-3 py-1"
          >
            View All
          </Link>
        )}
      </div>

      {/* Main Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products available.
          </p>
        )}
      </div>
    </Container>
  );
};

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
      rating: PropTypes.number,
    })
  ).isRequired,
  viewAllLink: PropTypes.string,
};

export default ProductSection;
