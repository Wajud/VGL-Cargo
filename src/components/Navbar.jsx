import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="py-2 shadow-gray-700 shadow-sm px-8 bg-white fixed top-0 w-full z-50">
      <div className="px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1734967606/da15299b-594b-464e-8288-03f7e3e9d923_nt8gyc.jpg"
            alt="logo"
            className="h-12 w-12 md:h-16 md:w-16"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 font-bold text-gray-700">
          <li>
            <Link to="/">
              <h1 className="hover:text-red-500 cursor-pointer">Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h1 className="hover:text-red-500 cursor-pointer">About Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h1 className="hover:text-red-500 cursor-pointer">Contact Us</h1>
            </Link>
          </li>
        </ul>

        {/* Register Button */}
        <div className="hidden md:block">
          <Link to="/register">
            <h1 className="hover:bg-gray-200 bg-green-600 px-6 py-2 font-bold text-white rounded-full shadow-md cursor-pointer">
              Register
            </h1>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-gray-50 rounded-lg shadow-lg z-50"
        >
          <Link to="/">
            <h1 className="block py-2 px-4 hover:bg-gray-100 font-bold cursor-pointer">
              Home
            </h1>
          </Link>
          <Link to="/about">
            <h1 className="block py-2 px-4 hover:bg-gray-100 font-bold cursor-pointer">
              About Us
            </h1>
          </Link>
          <Link to="/contact">
            <h1 className="block py-2 px-4 hover:bg-gray-100 font-bold cursor-pointer">
              Contact Us
            </h1>
          </Link>
          <Link to="/register">
            <h1 className="block py-2 px-4 bg-green-600 text-white font-bold rounded-lg text-center cursor-pointer">
              Register
            </h1>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
