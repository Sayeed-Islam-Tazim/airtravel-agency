"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { handleWaContact } from "../utils/util";

const AskNow = () => {
  const waMessage = "Hello, So … where is your next trip?";
  return (
    <div className="relative flex justify-center items-center px-2 gap-1 lg:gap-50 h-48 bg-[url('/assets/world-map-dots.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/85"></div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative text-black origin-center"
      >
        <div className="relative ">
          <p className="text-sm lg:text-xl">Are You Convinced?</p>
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
        <p className="mt-3 ">
          <span className="-ms-2 bg-blue-600 text-white text-sm lg:text-lg font-semibold px-2 py-1 rounded">
            Ready to travel with us?
          </span>
        </p>
        <p className="mt-1 text-xs lg:text-[24px] flex flex-col">
          Find out where our group
          <span className=""> is traveling next.</span>
        </p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, x: 0 }}
        whileInView={{
          opacity: 1,
          x: [0, -6, 6, -4, 4, 0], // shake
        }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative text-white bg-green-700 flex items-center justify-center px-2 gap-1 py-1 rounded hover:bg-green-800"
        onClick={() => handleWaContact({ message: waMessage })}
      >
        <FaWhatsapp className="flex-none" />
        <span className="grow text-xs lg:text-lg">Ask Now</span>
      </motion.button>
    </div>
  );
};

export default AskNow;
