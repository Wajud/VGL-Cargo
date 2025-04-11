import React from "react";
import contactTwo from "../assets/contact-two.jpg";

// import contactBg from "../assets/contactbg.jpg";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";

const ReContact = () => {
  return (
    <div className="pt-12">
      <div className="flex px-12">
        <div className="relative top-16 w-1/3">
          {/* <img
            src={contactBg}
            // src={contactTwo}
            alt="contact image"
            className="h-full max-h-screen object-cover"
          /> */}
        </div>
        <div className="flex-1">
          {/* <h1>Contact us</h1> */}

          <div className="pt-20">
            <h1 className="text-4xl font-bold text-center pb-6">
              Get in Touch
            </h1>
            <div className="flex flex-col gap-4 text-center">
              <p>
                We are here to power your projects with expert solutions and
                relaible support. Whether you have a question, need a quote or
                want to discuss your electrical installation needs, our team is
                ready to assist you.{" "}
              </p>
              <p>Reach out today - let's bring your ideas to life!</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 shadow-md">
                <ContactForm />
              </div>
              <div className="relative top-12">
                <Contacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReContact;
