import React from "react";
import Contacts from "../components/Contacts";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 contactbg">
        <div className=" bg-[rgba(0,0,0,0.8)] text-white pt-[4.5rem] md:pt-32 px-8 md:px-20 pb-16">
          <h1 className="text-4xl font-bold text-center pb-6">Get in Touch</h1>
          <div className="flex flex-col gap-4 text-center">
            <p>
              We are here to keep your cargo moving with expert logistics
              solutions and reliable support. Whether you need a shipping quote,
              have questions about customs, or want to discuss your freight
              requirements, our team is ready to assist you.
            </p>
            <p>
              Reach out today – let’s get your goods delivered safely and on
              time!
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center gap-4 mt-16">
            <div className="relative -top-8">
              <ContactForm />
            </div>
            <div>
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
