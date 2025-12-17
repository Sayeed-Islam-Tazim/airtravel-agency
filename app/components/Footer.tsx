import { div } from "framer-motion/client";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="relative footer sm:footer-horizontal bg-neutral p-10">
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
                {/* <label className="label">Name</label> */}
                <input
                  type="text"
                  className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
                  placeholder="Your Name"
                />
              </div>

              <div className="my-2">
                {/* <label className="label">Email</label> */}
                <input
                  type="email"
                  className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
                  placeholder="Your E-mail"
                />
              </div>

              <div className="my-2">
                {/* <label className="label">Message</label> */}
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
      </footer>
    </div>
  );
};

export default Footer;
