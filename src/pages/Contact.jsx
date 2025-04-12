import React from "react";
import Contacts from "../components/Contacts";
import bgAlt from "../assets/bg-alt.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 contactbg">
        <div className=" bg-[rgba(0,0,0,0.8)] text-white pt-[4.5rem] md:pt-32 px-8 md:px-20 pb-16">
          <h1 className="text-4xl font-bold text-center pb-6">Get in Touch</h1>
          <div className="flex flex-col gap-4 text-center">
            <p>
              We are here to power your projects with expert solutions and
              reliable support. Whether you have a question, need a quote or
              want to discuss your electrical installation needs, our team is
              ready to assist you.{" "}
            </p>
            <p>Reach out today - let's bring your ideas to life!</p>
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
