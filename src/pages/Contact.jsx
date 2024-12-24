import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="">
      <div className=" w-[100%] gap-2">
        <div className="bg-gradient-to-r from-slate-900 via-slate-700 to-gray-900 relative  ">
          <img
            src="https://images.pexels.com/photos/1829198/pexels-photo-1829198.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="h-[15rem] w-[100%] object-cover mix-blend-overlay "
          />
          <div className="absolute top-[5rem] left-[3.5rem] lg:left-[28rem] font-bold text-[2rem] font-mono text-white">
            <p className="">Give us a call:</p>
            <p>+2349092351736</p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
