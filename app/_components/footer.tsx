import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-semibold mb-2">Connect with Us!</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/ucsbtasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="https://linktr.ee/tasaucsb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <SiLinktree className="w-8 h-8" />
          </a>
        </div>
        <p className="text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} UCSB TASA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
