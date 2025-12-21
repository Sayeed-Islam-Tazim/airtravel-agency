import { dancingScript } from "../fonts";
import { waPhoneNumber } from "./../utils/constants";

const page = () => {
  const message = "Hello, I would like to know more about your services.";

  const url = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="h-48 bg-[url('/assets/man-before-sea.jpg')] bg-fixed bg-cover bg-center bg-no-repeat opacity-85 flex justify-center items-center gap-2">
      <p className={`${dancingScript.className}`}>tazim</p>
      <div>
        <p>sd</p>
        <p>sd</p>
        <p>sd</p>
        <p>sd</p>
      </div>
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
