import Services from "../components/Services";
import TravelNext from "../components/TravekNext";
// import { waPhoneNumber } from "./../utils/constants";

const page = () => {
  // const message = "Hello, I would like to know more about your services.";

  // const url = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(
  //   message
  // )}`;

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div>
      <Services />
      <TravelNext />
    </div>

    //   <a
    //     className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
    //     href={`${url}`}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Documentation
    //   </a>
  );
};

export default page;
