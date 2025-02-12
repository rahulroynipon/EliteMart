import PropTypes from "prop-types";
import { ProductCard } from "../ui/ProductCard";
import { Link } from "react-router";

const ProductSection = ({ title, products, viewAllLink }) => {
  return (
    <section className="flex flex-col space-y-5 items-center justify-center w-full">
      {/* Header Section */}
      <div className="w-full max-w-7xl flex items-center justify-between flex-wrap px-5">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="font-medium text-blue-600 hover:underline px-3 py-1"
          >
            View All
          </Link>
        )}
      </div>

      {/* Main Grid */}
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-5">
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
    </section>
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
