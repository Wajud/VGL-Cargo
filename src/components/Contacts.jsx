import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
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
            <h2 className="text-[#D33434] text-normal font-semibold mb-1">
              Address
            </h2>
            <div className="text-sm">
              <p>45, Osolo way,</p>
              <p>off Muritala Muhammed Airport Road, </p>
              <p>Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Phone size={14} className="text-black" />
          </div>
          <div>
            <h2 className="text-[#D33434] text-normal font-semibold mb-1">
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
          <div>
            <h2 className="text-[#D33434] text-normal font-semibold mb-1">
              Email
            </h2>
            <div className="text-sm flex flex-col gap-[2px]">
              <p>
                <Link to="mailto:contact@vglcargo.com">
                  contact@vglcargo.com
                </Link>
              </p>
              <p>
                <Link to="mailto:admin@vglcargo.com">admin@vglcargo.com</Link>
              </p>
            </div>
          </div>
        </div>

        <Link
          to="https://www.linkedin.com/in/kunle-surakat-b07315160/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          className="flex gap-3"
        >
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Linkedin size={14} className="text-black" />
          </div>
          <div>
            <h2 className="text-[#D33434] text-normal font-semibold mb-1">
              Linkedin
            </h2>
            <div className="text-sm">
              <p>Valiant Global Logistics Ltd. </p>
            </div>
          </div>
        </Link>
        <Link
          to="https://www.instagram.com/vgl_cargo?igsh=MW42cTdxMTQ2dDNnMQ%3D%3D&utm_source=qr"
          target="_blank"
          className="flex gap-3"
        >
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Instagram size={14} className="text-black" />
          </div>
          <div>
            <h2 className="text-[#D33434] text-normal font-semibold mb-1">
              Instagram
            </h2>
            <div className="text-sm">
              <p>Valiant Global Logistics Ltd. </p>
            </div>
          </div>
        </Link>
        <Link
          to="https://www.facebook.com/share/19CMrXE4Wk/"
          target="_blank"
          className="flex gap-3"
        >
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white relative top-1">
            <Facebook size={14} className="text-black" />
          </div>
          <div>
            <h2 className="text-[#D33434] text-normal font-semibold mb-1">
              Facebook
            </h2>
            <div className="text-sm">
              <p>Vgl Cargo </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
