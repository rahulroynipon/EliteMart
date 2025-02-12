import { motion } from "framer-motion";

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default PageLoading;
