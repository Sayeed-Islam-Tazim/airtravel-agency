import Image from "next/image";
import ContactForm from "../Forms/contactForm";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaLocationPin,
  FaMessage,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import {
  mailAddress,
  physicalAddress,
  waPhoneNumber,
} from "../utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* <footer className="relative footer sm:footer-horizontal bg-neutral p-10">
        <Image
          src="/assets/footer-1.jpg"
          alt="floating background"
          fill
          className="object-cover opacity-40"
        />
        <nav className=" text-white mb-4 z-10">
          <p className="border-l-2 border-green-700 text-2xl px-2 font-bold">
            Get In Touch
          </p>
          <p>yi</p>
          <p>yi</p>
          <p>yi</p>
          <p>yi</p>
        </nav>

        <div>
          <form className="absolute -top-15">
            <fieldset className="bg-white text-green-700 border-base-300 rounded-box w-xs border p-4">
              <legend className="text-2xl px-2 border-l-2 border-green-700">
                Contact Us
              </legend>
              <label className="text-md text-gray-700">
                We’re here to help! Our advisors are available 24/7 to assist
                you.
              </label>
              <div className="my-2">
                <input
                  type="text"
                  className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
                  placeholder="Your Name"
                />
              </div>

              <div className="my-2">
                <input
                  type="email"
                  className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
                  placeholder="Your E-mail"
                />
              </div>

              <div className="my-2">
                <input
                  type="text"
                  className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
                  placeholder="Your Message .."
                />
              </div>
              <button className="btn btn-ghost mt-4 ">Send Message</button>
            </fieldset>
          </form>
        </div>
      </footer> */}
      <div className="">
        <footer className="min-h-64 bg-[url('/assets/footer-1.jpg')] bg-cover bg-center bg-no-repeat opacity-85">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-around items-center place-items-center mx-auto px-2 py-3">
            <nav className="text-white mb-4 flex flex-col gap-1">
              <p className="border-l-2 border-green-700 text-2xl px-2 font-bold my-2">
                Get In Touch
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>
                  <FaPhone className="text-green-700" />
                </span>
                {waPhoneNumber}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>
                  <FaMessage className="text-green-700" />
                </span>
                {mailAddress}
              </p>
              <Link href="https://maps.app.goo.gl/w7TdNHBXXtqr4ohTA">
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
      </div>
      {/* <div className="relative bg-blue-500 p-8 rounded-lg h-64">
        <Image
          src="/assets/footer-1.jpg"
          alt="floating background"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute top-0 left-0 bg-red-500 text-white p-4 rounded">
          Top Left
        </div>
        <div className="absolute top-0 right-0 bg-green-500 text-white p-4 rounded">
          Top Right
        </div>
        <div className="absolute bottom-0 left-0 bg-purple-500 text-white p-4 rounded">
          Bottom Left
        </div>
        <div className="absolute bottom-0 right-0 bg-yellow-500 text-white p-4 rounded">
          Bottom Right
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-blue-600 text-white p-4 rounded">
            Centered Absolutely
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
