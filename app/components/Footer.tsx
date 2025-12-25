import ContactForm from "../Forms/contactForm";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaMessage,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import {
  mailAddress,
  mapAddress,
  physicalAddress,
  waPhoneNumber,
} from "../utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-64 bg-[url('/assets/footer-1.jpg')] bg-cover bg-center bg-no-repeat opacity-85 lg:mt-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-around items-center place-items-center mx-auto px-2 py-3">
        <nav className="text-white mb-4 flex flex-col gap-1">
          <p className="border-l-2 border-green-700 text-2xl px-2 font-bold my-2">
            Get In Touch
          </p>
          <Link href={`tel:${waPhoneNumber}`}>
            <p className="flex items-center gap-2 text-sm">
              <span>
                <FaPhone className="text-green-700" />
              </span>
              +{waPhoneNumber}
            </p>
          </Link>
          <Link href={`mailto:${mailAddress}`}>
            <p className="flex items-center gap-2 text-sm">
              <span>
                <FaMessage className="text-green-700" />
              </span>
              {mailAddress}
            </p>
          </Link>
          <Link href={mapAddress}>
            <p className="flex items-center gap-2 text-sm">
              <span>
                <FaLocationDot className="text-green-700" />
              </span>
              {physicalAddress}
            </p>
          </Link>
        </nav>
        <div className="">
          <ContactForm />
        </div>
      </div>
      <hr className="w-11/12 my-3 mx-auto" />
      {/* <div className="w-11/12 mx-auto grid grid-cols-3 sm:grid-cols-1 place-items-center"> */}
      {/* sm:flex-col */}
      <div className="w-11/12 mx-auto flex  justify-between items-center">
        <p className="text-xs">Copyright © 2025 by Air Travel Agency</p>
        <div className="grid place-items-center">
          <p className="text-sm">Follow Us</p>
          <div className="flex gap-2 mb-4 items-center text-black">
            <Link href="#" className="bg-white rounded-xl text-xs p-1">
              <FaFacebook />
            </Link>
            <Link href="#" className="bg-white rounded-xl text-xs p-1">
              <FaYoutube />
            </Link>
            <Link href="#" className="bg-white rounded-xl text-xs p-1">
              <FaInstagram />
            </Link>
            <Link href="#" className="bg-white rounded-xl text-xs p-1">
              <FaLinkedin />
            </Link>
            <Link href="#" className="bg-white rounded-xl text-xs p-1">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <p className="text-xs">Made with ❤ by Taz Digital</p>
      </div>
    </footer>
  );
};

export default Footer;
