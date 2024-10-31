import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="">
      <div className="heading pb-8">
        <h1 className="title text-lg lg:text-3xl text-center lg:text-left font-bold text-gray-900">
          Contact
        </h1>
        <p className="text-center lg:text-left font-medium">How can we help?</p>
      </div>

      <div className="shadow-lg rounded-lg pb-12 mb-8 p-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
