import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Connect with us:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.instagram.com/tasa.ucsb/"
              target="_"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} UCSB TASA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
