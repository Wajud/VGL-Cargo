import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-bold">
          © {currentYear} SET ANJI Engineering Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
