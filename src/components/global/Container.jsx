import PropTypes from "prop-types";
import cn from "./../../utils/cn";

const Container = ({ className, children }) => {
  return (
    <section className="flex flex-col space-y-5 items-center justify-center w-full">
      <div
        className={cn(
          "w-full max-w-7xl flex items-center px-3 md:px-5 lg:px-5 2xl:px-0",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
