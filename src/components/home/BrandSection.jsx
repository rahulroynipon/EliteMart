import PropTypes from "prop-types";
import { Link } from "react-router";
import Container from "../global/Container";

const images = import.meta.glob("/src/assets/brand/*.{png,jpg,jpeg}", {
  eager: true,
});

const BrandSection = ({ title, brands, viewAllLink }) => {
  return (
    <Container className="flex-col  space-y-5">
      {/* Header Section */}
      <div className="w-full flex items-center justify-between flex-wrap">
        <h3 className="text-base md:text-xl font-semibold text-gray-700">
          {title}
        </h3>
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
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 space-x-1.5 space-y-1.5">
        {brands?.length > 0 ? (
          brands.map((brand) => {
            const imageSrc =
              images[`/src/assets/brand/${brand.image}`]?.default ||
              brand.image;
            return (
              <div
                key={brand._id}
                className="h-[8rem] bg-gray-200 cursor-pointer border border-gray/20
       hover:ring-1 ring-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <img
                  className="h-full w-full object-cover"
                  src={imageSrc}
                  alt={brand.name}
                />
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No barnds available.
          </p>
        )}
      </div>
    </Container>
  );
};

BrandSection.propTypes = {
  title: PropTypes.string.isRequired,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ),
  viewAllLink: PropTypes.string,
};

export default BrandSection;
