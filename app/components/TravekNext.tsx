"use client";
import { useState } from "react";
import { dancingScript } from "../fonts";
import { pollDestinations } from "../utils/dataItems";
import { motion } from "framer-motion";

const TravelNext = () => {
  const [showVote, setShowVote] = useState(false);

  const showResult = (id: string) => {
    console.log("id", id);
    setShowVote(true);
  };

  return (
    <div className="px-2 py-4 min-h-48 bg-[url('/assets/man-before-sea.jpg')] bg-fixed bg-cover bg-center bg-no-repeat opacity-85 grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center gap-4">
      <p className={`${dancingScript.className} text-2xl`}>
        Where do you want to Travel next?
      </p>
      <div>
        <p className="relative mb-4">
          Submit your poll to know where other
          <span> people are interested to travel.</span>
          <motion.hr
            className="absolute origin-left left-0 -bottom-2 h-1 w-2/3 bg-green-700 -rotate-2 rounded-full"
            animate={{
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4.8,
              times: [0, 0.45, 0.85, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.7,
            }}
          />
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2">
          {pollDestinations.map((dest) => {
            return (
              <div className="text-[20px] lg:text-sm" key={dest.id}>
                {showVote ? (
                  <span
                    className="hover:text-green-700"
                    onClick={() => setShowVote(false)}
                  >
                    <span className="font-semibold">{dest.vote}%</span> voted
                    for {dest.title}
                  </span>
                ) : (
                  <>
                    <input
                      type="radio"
                      name="dest-radio"
                      className="radio radio-xs"
                      onClick={() => showResult(dest.id)}
                    />
                    <span className="ms-2">{dest.title}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelNext;
