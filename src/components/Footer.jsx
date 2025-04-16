import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.jpg";

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
          <a
            href="mailto:setanjiengineering@gmail.com"
            className="text-sm text-gray-300"
          >
            Email: setanjiengineering@gmail.com
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
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
