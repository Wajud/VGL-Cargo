import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);

  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact-us",
    },
  ];

  return (
    <nav className="py-2 shadow-gray-700 shadow-sm md:px-8 bg-white fixed top-0 w-full z-50">
      <div className="px-2 md:px-4 flex gap-x-8 justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src={logo} alt="logo" className="h-12 w-12 md:h-16 md:w-16" />
          {/* <img
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1734967606/da15299b-594b-464e-8288-03f7e3e9d923_nt8gyc.jpg"
            alt="logo"
            className="h-12 w-12 md:h-16 md:w-16"
          /> */}
          <h1 className="hidden md:block text-blue-800 text-4xl font-bold relative -top-1">
            SET_ANJI
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <p className="text-red-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>{" "}
              </p>
            ) : (
              <p className="text-blue-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </p>
            )}
          </button>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 font-bold text-gray-700">
          {Links.map((link) => (
            <li>
              <Link
                to={link.path}
                className={
                  pathName === link.path
                    ? "hover:text-blue-500 cursor-pointer relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-blue-500"
                    : "hover:text-blue-500 cursor-pointer"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-gray-50 rounded-lg shadow-lg z-50 text-center"
        > */}
      <ul
        className={`absolute top-full left-0 w-full bg-gray-50 shadow-lg z-50 text-center transition-all duration-500 ${
          !isMobileMenuOpen ? "translate-x-[-100%]" : "translate-x-0"
        }`}
      >
        {Links.map((link) => (
          <li
            className={` transition-all duration-500 py-2 border-b border-blue-200 last-of-type:border-b-0 hover:bg-gray-100 hover:text-blue-500 cursor-pointer `}
          >
            <Link
              to={link.path}
              className={`block w-full relative ${
                pathName === link.path
                  ? "before:absolute before:-bottom-[2px] before:left-1/2 before:-translate-x-1/2 before:w-8 before:mx-auto before:h-[2px] before:bg-blue-500"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
