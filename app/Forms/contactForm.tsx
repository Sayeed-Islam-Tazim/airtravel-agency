"use client";

import { FormEvent } from "react";

const ContactForm = () => {
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    console.log(nameInput.value, emailInput.value);
  };
  return (
    <form
      onSubmit={handleForm}
      className="rounded-box shadow-2xl pt-2 bg-white lg:bg-transparent lg:-mt-15"
    >
      <fieldset className="bg-white text-green-700 lg:border-2 lg:border-green-700 rounded-box w-full lg:w-xs p-4">
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
