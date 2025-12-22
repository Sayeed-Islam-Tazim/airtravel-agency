import Image from "next/image";
import { tourPackages } from "../utils/dataItems";
import { FaLocationDot, FaRegClock, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { waPhoneNumber } from "../utils/constants";

const TourPackages = () => {
  const message = "Hello, I would like to know more about your services.";

  const url = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="bg-white text-black mx-auto flex flex-col justify-center items-center py-4">
      <h2 className="text-2xl  font-semibold mb-5">Tour Packages</h2>

      <div className="w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-1 place-items-center place-content-center">
        {tourPackages.map((tour) => {
          return (
            <div className="hover-3d shadow-2xl" key={tour.id}>
              <div className="card bg-white lg:w-60 lg:h-60 shadow-sm">
                <figure className="p-2 rounded-2xl">
                  <Image src={tour.img} width={300} height={300} alt="Shoes" />
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
                  <Link href={`${url}`} className="btn btn-ghost">
                    Know More <FaWhatsapp />
                  </Link>
                </div>
              </div>
              {/* 8 empty divs needed for the 3D effect */}
              {/* <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TourPackages;
