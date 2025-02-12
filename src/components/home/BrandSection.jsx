import PropTypes from "prop-types";
import { Link } from "react-router";

const BrandSection = ({ title, barnds, viewAllLink }) => {
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
      <div className="w-full max-w-7xl grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 px-5">
        {barnds?.length > 0 ? (
          barnds.map((brand) => (
            <div
              key={brand._id}
              className="h-[8rem] bg-gray-200 cursor-pointer
       hover:ring-1 ring-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              {/* <img src="" alt="" /> */}
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No barnds available.
          </p>
        )}
      </div>
    </section>
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
