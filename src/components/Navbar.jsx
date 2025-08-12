import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const location = useLocation();
  const pathName = location.pathname;

  const Links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact-us",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ];

  return (
    <nav className="py-2 shadow-gray-700 shadow-sm md:px-8 bg-white fixed top-0 w-full z-50">
      <div className="px-2 md:px-4 flex gap-x-2 justify-between items-center">
        {/* Logo */}

        <img src={logo} alt="logo" className="h-[3.5rem]  object-cover" />

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? (
              <p className="text-[#D33434]" onClick={closeMobileMenu}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#D33434"
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
              <p className="text-[#D33434]" onClick={openMobileMenu}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#D33434"
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

        {/*Desktop Links */}
        <ul className="hidden flex-1 md:flex justify-end space-x-6 font-bold text-gray-700">
          {Links.map((link) => (
            <li>
              <Link
                to={link.path}
                className={
                  pathName === link.path
                    ? "hover:text-[#D33434] cursor-pointer relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-[#D33434]"
                    : "hover:text-[#D33434] cursor-pointer"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}

      <ul
        className={`md:hidden absolute top-full left-0 w-full bg-gray-50 shadow-lg z-50 text-center transition-all duration-500 ${
          !isMobileMenuOpen ? "translate-x-[-100%]" : "translate-x-0"
        }`}
        onClick={closeMobileMenu}
      >
        {Links.map((link) => (
          <li
            className={` transition-all duration-500 py-2 last-of-type:border-b-0 hover:bg-gray-200 hover:text-[#D33434] cursor-pointer `}
          >
            <Link
              to={link.path}
              className={`block w-full relative ${
                pathName === link.path
                  ? "before:absolute before:-bottom-[2px] before:left-1/2 before:-translate-x-1/2 before:w-8 before:mx-auto before:h-[2px] before:bg-[#D33434]"
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
