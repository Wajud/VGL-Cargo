import React from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 relative md:top-12 px-4">
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <MapPin size={16} className="text-black" />
          </div>
          <div>
            <h2 className="text-red-600 text-normal font-semibold mb-1">
              Address
            </h2>
            <div className="text-sm">
              <p>20, Osolo way,</p>
              <p>Isolo, Oshodi, Lagos, </p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Phone size={14} className="text-black" />
          </div>
          <div>
            <h2 className="text-red-600 text-normal font-semibold mb-1">
              Call
            </h2>
            <div className="text-sm">
              <p>08175073848, 08034802444</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Mail size={14} className="text-black" />
          </div>
          <Link to="mailto:setanjiengineering@gmail.com">
            <h2 className="text-red-600 text-normal font-semibold mb-1">
              Email
            </h2>
            <div className="text-sm">
              <p>contact@vglcargo.com</p>
            </div>
          </Link>
        </div>
        {/* <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Instagram size={14} className="text-black" />
          </div>
          <Link
            to="https://www.instagram.com/set_anji?igsh=emxvYmpnaTN1bjBx"
            target="_blank"
          >
            <h2 className="text-blue-600 text-normal font-semibold mb-1">
              Instagram
            </h2>
            <div className="text-sm">
              <p>SET ANJI ENGINEERING LTD </p>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contacts;
