"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { handleWaContact } from "../utils/util";

const AskNow = () => {
  const waMessage = "Hello, So … where is your next trip?";
  return (
    <div className="relative flex justify-center items-center px-2 gap-2 lg:gap-50 h-48 bg-[url('/assets/world-map-dots.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="relative text-black">
        <div className="relative ">
          <p className="text-sm lg:text-lg">Are You Conviced?</p>
          <motion.hr
            className="absolute origin-left left-0 -bottom-2 h-1 w-2/3 bg-green-700 -rotate-2 rounded-full"
            animate={{
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.8,
              times: [0, 0.45, 0.85, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.7,
            }}
          />
        </div>
        <p className="mt-3 -ms-2 bg-blue-600 text-white text-sm lg:text-lg font-semibold px-2 rounded">
          Ready to travel with us?
        </p>
        <p className="mt-1 text-xs lg:text-md">
          Find out where our group is traveling next.
        </p>
      </div>
      <button
        className="relative text-white bg-green-700 flex items-center justify-center px-5 gap-2 rounded"
        onClick={() => handleWaContact({ message: waMessage })}
      >
        <FaWhatsapp />
        <span className="text-xs lg:text-lg">Ask Now </span>
      </button>
    </div>
  );
};

export default AskNow;
