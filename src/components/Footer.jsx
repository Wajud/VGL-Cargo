import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Brief */}
        <div>
          <img
            src={logo}
            alt="Company Logo"
            className="h-[3.5rem] rounded-sm shadow-md mb-4"
          />
          <p className="text-sm text-gray-300">
            Simplifying logistics with reliable, affordable, and efficient
            freight forwarding services tailored to meet your unique needs.
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className="text-sm text-gray-300">
            45, Osolo way,
            <br />
            off Muritala Muhammed Airport Road, <br />
            Lagos, Nigeria.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <div className="flex gap-2 text-sm text-gray-300 mb-1">
            <p>Phone: </p>
            <div>
              <p>+234 817 507 3848,</p>
              <p>+234 803 480 2444</p>
            </div>
          </div>

          <div className="text-sm text-gray-300 hover:text-white flex gap-4">
            <p>Email: </p>
            <div className="flex flex-col gap-[2px]">
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
              <Link to="/contact-us" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Valliant Global Logistics. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
