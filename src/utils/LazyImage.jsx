import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import cn from "./cn";

const LazyImage = ({ src, alt, className }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  const handleImageLoad = () => {
    setHasLoaded(true);
  };

  return (
    <motion.img
      ref={ref}
      src={inView ? src : undefined}
      alt={alt}
      loading="lazy"
      className={cn("w-full h-full object-cover", className)}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{
        opacity: hasLoaded ? 1 : 0,
        scale: hasLoaded ? 1 : 1.05,
      }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut" },
        scale: { duration: 0.5, ease: "easeOut" },
      }}
      onLoad={handleImageLoad}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/150";
      }}
    />
  );
};

export default LazyImage;
