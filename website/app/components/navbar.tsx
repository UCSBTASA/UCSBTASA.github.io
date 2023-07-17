"use client";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleProgramsMenu = () => {
    setShowProgramsMenu(!showProgramsMenu);
  };

  return (
    <div className="w-full z-100 py-4 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0">
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About Us
              </li>
            </Link>
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:border-b"
                onMouseEnter={toggleProgramsMenu}
                onMouseLeave={toggleProgramsMenu}
              >
                Programs
                {/* {showProgramsMenu && (
                  <div className="dropdown-menu bg-gray-400 p-2 absolute">
                    <ul className="">
                      <DropdownItem text="Big Little" link="/"></DropdownItem>
                      <DropdownItem text="Night Market" link="/"></DropdownItem>
                      <DropdownItem
                        text="Intern Program"
                        link="/"
                      ></DropdownItem>
                    </ul>
                  </div>
                )} */}
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Staff</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Events</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Gallery
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Graduates
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          !nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Image
                src="/../public/logo.jpeg"
                alt="/"
                width="87"
                height="35"
              ></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
            <div className="border-b border-gray-300 m-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Find out what we're about!
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">About Us</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">Programs</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">Staff</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">Events</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">Gallery</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">Graduates</li>
                </Link>
                <Link href="">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="p-3">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Socials!
                </p>
                <div className="flex items-center justify-between p-3 my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DropdownItemProps {
  text: string;
  link: string;
}

function DropdownItem(props: DropdownItemProps) {
  return (
    <li className="dropdownItem">
      <Link href={props.link}>
        <li className="text-sm uppercase hover:text-blue-500">{props.text}</li>
      </Link>
    </li>
  );
}

export default NavBar;
