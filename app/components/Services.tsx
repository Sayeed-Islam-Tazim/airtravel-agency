import Image from "next/image";
import { serviceItems } from "../utils/dataItems";

const Services = () => {
  return (
    <div className="bg-gray-400/10 text-black mx-auto   flex flex-col justify-center items-center py-4">
      <h2 className="text-2xl  font-semibold mb-5">Our Services</h2>

      <div className="w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 place-items-center place-content-center">
        {serviceItems.map((item) => {
          return (
            <div className="hover-3d" key={item.id}>
              <div className="card bg-white w-full  shadow-sm">
                <figure className="lg:min-h-50 p-2 rounded-2xl">
                  <Image src={item.img} width={300} height={300} alt="Shoes" />
                </figure>
                <div className="p-2 text-center">
                  <h2 className="text-sm lg:text-md font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-[10px] lg:text-[15px]">{item.desc}</p>
                </div>
              </div>
              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
