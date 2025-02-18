import { motion } from "framer-motion";
import Logo from "./../../assets/logo.png";

const AppLoading = () => {
  const letters = ["E", "l", "i", "t", "e", " ", "M", "a", "r", "t"];
  const colors = [
    "#007025",
    "#007025",
    "#007025",
    "#007025",
    "#007025",
    "#007025",
    "#FFD700",
    "#FFD700",
    "#FFD700",
    "#FFD700",
  ];

  return (
    <div className="fixed z-50 inset-0 w-full h-full min-h-screen max-h-screen bg-light-gray/30 backdrop-blur flex items-center justify-center px-2">
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            bounce: 0.4,
            delay: 0.2,
          }}
        >
          <img className="h-28 w-auto" src={Logo} alt="Elite-Mart-logo" />
        </motion.div>

        <div className="flex items-center space-x-1 text-5xl font-semibold">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{ color: colors[index] }}
            >
              {letter}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: letters.length * 0.1 + 0.5 }}
        >
          <span className="text-gray-500 text-lg text-center">
            You're on the ultimate shopping destination!
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default AppLoading;
