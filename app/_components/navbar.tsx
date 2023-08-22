"use client";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleProgramsMenu = () => {
    setShowProgramsMenu(!showProgramsMenu);
  };

  return (
    <div className="w-full z-10 lg:py-4 border-b lg:px-8 dark:border-slate-300/10 h-[0px] p-0 m-0 lg:mx-0">
      <div className="flex justify-center items-center w-full lg:h-full px-2 2xl:px-16 h-[0px] p-0 m-0">
        <div className="h-6 overflow-y-hidden">
          <ul className="hidden lg:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                About Us
              </li>
            </Link>
            <Link href="/programs">
              <li
                className="ml-10 text-sm uppercase"
                onMouseEnter={toggleProgramsMenu}
                onMouseLeave={toggleProgramsMenu}
              >
                Programs
                {showProgramsMenu && (
                  <div className="dropdown-menu bg-[#ffd1d8] p-2 absolute z-10">
                    <ul className="">
                      <DropdownItem
                        text="Big Little"
                        link="/programs/big-little"
                      ></DropdownItem>
                      <DropdownItem
                        text="Night Market"
                        link="/programs/night-market"
                      ></DropdownItem>
                      <DropdownItem
                        text="Intern Program"
                        link="/programs/interns"
                      ></DropdownItem>
                    </ul>
                  </div>
                )}
              </li>
            </Link>
            <Link href="/staff">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Staff
              </li>
            </Link>
            <Link href="/events">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Events
              </li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Gallery
              </li>
            </Link>
            {/* <Link href="/graduates">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Graduates
              </li>
            </Link> */}
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="lg:hidden absolute top-0 left-0 mt-4 ml-8 sm:mt-8"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "lg:hidden fixed left-0 top-0 w-full h-[110vh] bg-black/70 z-50"
            : ""
        }
      >
        <div
          className={
            !nav
              ? "fixed overflow-y-scroll left-0 top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-[110vh] bg-[#ecf0f3] p-10 ease-in duration-500 z-50"
              : "fixed overflow-y-scroll left-[-100%] top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-[110vh] bg-[#ecf0f3] p-10 ease-in duration-500 z-50"
          }
        >
          <div className="">
            <div className="flex w-full justify-between items-center">
              <Image
                src="/logo.jpeg"
                alt="/"
                width="87"
                height="35"
                className="rounded-lg"
              ></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
            <div className="border-b border-gray-300 m-4">
              <p className="w-[85%] lg:w-[90%] py-4">
                Find out what we&apos;re about!
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/about">
                  <li className="py-4 text-sm">About Us</li>
                </Link>
                <Link href="/programs">
                  <li className="py-4 text-sm">Programs</li>
                </Link>
                <Link href="/staff">
                  <li className="py-4 text-sm">Staff</li>
                </Link>
                <Link href="/events">
                  <li className="py-4 text-sm">Events</li>
                </Link>
                <Link href="/gallery">
                  <li className="py-4 text-sm">Gallery</li>
                </Link>
                {/* <Link href="/gradutes">
                  <li className="py-4 text-sm">Graduates</li>
                </Link> */}
                <Link href="/contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="p-3">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Socials!
                </p>
                <div className="flex items-center justify-between p-3 my-4 w-full sm:w-[80%]">
                  <Link href="https://www.instagram.com/tasa.ucsb/" target="_">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </Link>
                  <Link href="https://linktr.ee/tasaucsb" target="_">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <SiLinktree />
                    </div>
                  </Link>
                  <Link href="mailto:tasa.ucsb@gmail.com" target="_">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  {/* <Link href="https://linktr.ee/tasaucsb" target="_">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>{" "}
                  </Link> */}
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
        <li className="text-sm uppercase m-1 hover:text-blue-500">
          {props.text}
        </li>
      </Link>
    </li>
  );
}

export default NavBar;
