"use client";
import Image from "next/image";
import { serviceItems } from "../utils/dataItems";
import { useState } from "react";

const PopularDest = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-400/10 text-black mx-auto flex flex-col justify-center items-center py-4">
      <h2 className="text-2xl  font-semibold mb-5">Popular Destinations</h2>

      <div className="w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 place-items-center place-content-center">
        {serviceItems.map((item) => {
          return (
            <div
              onClick={() => setOpen(true)}
              className="hover-3d"
              key={item.id}
            >
              <div className="card bg-white w-full  shadow-sm">
                <figure className="relative lg:min-h-50 p-2 rounded-2xl">
                  <Image src={item.img} width={300} height={300} alt="Shoes" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    hi
                  </div>
                </figure>
                <div className="p-2 text-center">
                  <h2 className="text-sm lg:text-md font-semibold">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-50 text-white text-2xl"
              >
                ✕
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&rel=0"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
    // <>
    //   <div onClick={() => setOpen(true)} className="cursor-pointer">
    //     <div className="card bg-base-100 w-96 shadow-sm">
    //       <div className="card-body">
    //         <h2 className="card-title">Card Title</h2>
    //         <p>
    //           A card component has a figure, a body part, and inside body there
    //           are title and actions parts
    //         </p>
    //       </div>
    //       <figure>
    //         <Image
    //           src="/assets/offers/offer-1.jpg"
    //           alt="Video Preview"
    //           fill
    //           className="rounded-xl w-full"
    //         />
    //       </figure>
    //     </div>
    //   </div>
    //   <div>
    //     <p className="mt-2 text-center font-medium">Air Travel Experience</p>
    //     {open && (
    //       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    //         <div className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-xl overflow-hidden">
    //           <button
    //             onClick={() => setOpen(false)}
    //             className="absolute top-3 right-3 z-50 text-white text-2xl"
    //           >
    //             ✕
    //           </button>

    //           <iframe
    //             className="w-full h-full"
    //             src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&rel=0"
    //             title="YouTube video"
    //             allow="autoplay; encrypted-media"
    //             allowFullScreen
    //           ></iframe>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </>
  );
};

export default PopularDest;
