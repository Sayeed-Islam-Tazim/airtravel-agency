"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <motion.header
      className="relative flex flex-col items-center justify-center h-75 lg:h-100 rounded overflow-hidden text-center"
      animate={{
        y: [0, -20, -40, 2 - 0, 0, 30, 50, 30, 0], // wave pattern
        rotate: [0, 1, 0, -1, 0], // slight tilt
      }}
      transition={{
        duration: 8, // slower = smoother
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <Image
        src="/assets/bg-clouds.png"
        alt="floating background"
        fill
        className="object-cover opacity-70"
      />
      {/* Title */}
      <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-4 z-10">
        Explore the World 🌍
      </h1>
      <p className="text-gray-600 text-xs lg:text-lg z-10">
        Book hotels, flights & tours easily
      </p>

      {/* Floating Images */}
      <motion.div
        className="absolute top-10 left-1/4"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/plane.png"
          alt="plane"
          width={100}
          height={100}
          className="opacity-80 drop-shadow-lg w-20 h-20 sm:w-18 sm:h-18 lg:w-30 lg:h-30"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/4"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/palm-tree.png"
          alt="palm"
          width={100}
          height={100}
          className="opacity-80 drop-shadow-lg w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
        />
      </motion.div>

      <motion.div
        className="absolute top-7 right-10 lg:top-20"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/suitcase.png"
          alt="suitcase"
          width={90}
          height={90}
          className="opacity-90 drop-shadow-xl w-10 h-14 sm:w-14 sm:h-18 lg:w-20 lg:h-24"
        />
      </motion.div>
    </motion.header>
  );
};

export default Header;
