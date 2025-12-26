"use client";
import Image from "next/image";
import { tourPackages } from "../utils/dataItems";
import {
  FaLocationDot,
  FaPlaneDeparture,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa6";
import { handleWaContact } from "../utils/util";
import { motion } from "framer-motion";

const TourPackages = () => {
  const showAllEvents = () => {};

  return (
    <div className="bg-white text-black mx-auto flex flex-col justify-center items-center py-4">
      <h2 className="text-2xl font-semibold mb-5">Tour Packages</h2>

      <div className="w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 place-items-center place-content-evenly">
        {tourPackages.map((tour) => {
          return (
            <div className="hover-3d shadow-2xl" key={tour.id}>
              <div className="card bg-white lg:w-60 lg:h-60 shadow-sm">
                <figure className="mt-2 p-2 rounded-lg">
                  <Image
                    src={tour.img}
                    width={300}
                    className=""
                    height={300}
                    alt="Shoes"
                  />
                </figure>
                <div className="p-2 ">
                  <h2 className="px-2 text-sm lg:text-md">{tour.name}</h2>
                  <div className="p-2 text-[10px] lg:text-[15px] text-gray-700/40 flex items-center gap-1">
                    <FaRegClock />
                    <p className="">{tour.duration}</p>
                    <span> | </span>
                    <FaLocationDot />
                    <p className="">{tour.place}</p>
                  </div>
                  <hr />
                  <p className="text-xs px-2 pt-2">
                    <span className="font-semibold">
                      ৳ {tour.costingPerHead}
                    </span>
                    /head
                    {tour.costingCouple ? (
                      <span>
                        ,
                        <span className="font-bold"> {tour.costingCouple}</span>
                        /couple
                      </span>
                    ) : (
                      <></>
                    )}
                  </p>
                  <button
                    className="p-2 flex gap-2 items-center text-sm text-[#53D367] "
                    onClick={() => handleWaContact({ tourName: tour.name })}
                  >
                    <span>Know More</span>
                    <FaWhatsapp />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <motion.button
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-5 p-2 bg-green-700 text-white text-xs lg:text-lg flex items-center justify-center rounded-xl gap-2 origin-left"
        onClick={() => showAllEvents()}
      >
        <span>Find all of our packages</span>
        <FaPlaneDeparture />
      </motion.button>
    </div>
  );
};

export default TourPackages;
