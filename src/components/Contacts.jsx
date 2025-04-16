import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 relative md:top-12 px-4">
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <MapPin size={16} className="text-black" />
          </div>
          <div>
            <h2 className="text-blue-600 text-normal font-semibold mb-1">
              Address
            </h2>
            <div className="text-sm">
              <p>14, Raimi Ogundipe Street,</p>
              <p>Ogba, Obawole, Lagos, </p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Phone size={14} className="text-black" />
          </div>
          <div>
            <h2 className="text-blue-600 text-normal font-semibold mb-1">
              Call
            </h2>
            <div className="text-sm">
              <p>09133044386</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Mail size={14} className="text-black" />
          </div>
          <a href="mailto:setanjiengineering@gmail.com">
            <h2 className="text-blue-600 text-normal font-semibold mb-1">
              Email
            </h2>
            <div className="text-sm">
              <p>setanjiengineering@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
