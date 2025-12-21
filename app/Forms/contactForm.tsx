"use client";

const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("e.target.name.value", e.target.name.value);
  };
  return (
    <form
      onSubmit={handleForm}
      className="rounded-box pt-2 lg:-mt-15 xl:-mt-15 2xl:-mt-15 sm:bg-white md:bg-white "
    >
      <fieldset className="bg-white text-green-700 border border-base-300 rounded-box lg:w-xs w-11/12 p-4">
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
            name="name"
          />
        </div>
        <div className="my-2">
          <input
            type="email"
            className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
            placeholder="Your E-mail"
            name="email"
          />
        </div>
        <div className="my-2">
          <input
            type="text"
            className="w-full p-2 rounded-xl outline-none focus:border focus:border-green-700"
            placeholder="Your Message .."
            name="message"
          />
        </div>
        <button className="btn btn-ghost mt-4">Send Message</button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
