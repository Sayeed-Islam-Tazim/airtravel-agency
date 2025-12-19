const ContactForm = () => {
  return (
    <form className="">
      <fieldset className="bg-white text-green-700 border-base-300 rounded-box lg:w-xs w-1/2 border p-4">
        <legend className="text-2xl px-2 border-l-2 border-green-700">
          Contact Us
        </legend>
        <label className="text-sm text-gray-700">
          We’re here to help! Our advisors are available 24/7 to assist you.
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
  );
};

export default ContactForm;
