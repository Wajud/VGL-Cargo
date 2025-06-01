import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Brief */}
        <div>
          <img
            src={logo}
            alt="Company Logo"
            className="h-24 rounded-full mb-4"
          />
          <p className="text-sm text-gray-300">
            Powering sites, managing energy, and delivering quality electrical
            installations and services across Nigeria.
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className="text-sm text-gray-300">
            {/* 12 Circuit Lane, Power City,
            <br />
            Lagos, Nigeria. */}
            14, Raimi Ogundipe Street,
            <br />
            Ogba, Obawole, Lagos, <br />
            Nigeria
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-300">Phone: +234 913 304 4386</p>
          <Link
            to="mailto:setanjiengineering@gmail.com" target="_blank"
            className="text-sm text-gray-300"
          >
            Email: setanjiengineering@gmail.com
          </Link><br/>
          <Link
            to="https://www.instagram.com/set_anji?igsh=emxvYmpnaTN1bjBx" target="_blank"
            className="text-sm text-gray-300"
          >
            Instagram: SET ANJI ENGINEERING LTD
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} SET Anji Engineering Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
