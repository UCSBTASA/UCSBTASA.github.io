"use client";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNav(true);
      }
    }

    if (!nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full z-10 lg:pt-4 lg:pb-6 border-b border-black lg:px-8 dark:border-slate-300/10 h-[0px] p-0 m-0 lg:mx-0">
      <div className="flex justify-center items-center w-full lg:h-full px-2 2xl:px-16 h-[0px] p-0 m-0">
        <div className="h-6 overflow-y-hidden">
          <ul className="hidden lg:flex">
            <Link href="/">
              <li className="text-black ml-10 text-sm uppercase hover:border-pink hover:border-b-4">
                Home
              </li>
            </Link>
            <Link href="/programs">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Programs
              </li>
            </Link>
            <Link href="/staff">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Staff
              </li>
            </Link>
            <Link href="/events">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Events
              </li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Gallery
              </li>
            </Link>
            <Link href="/family-trees">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Family Trees
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Contact
              </li>
            </Link>
            <Link href="/store">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Store
              </li>
            </Link>
            <Link href="/graduates">
              <li className="ml-10 text-sm uppercase text-black hover:border-pink hover:border-b-4">
                Alumni
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
          ref={navRef}
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
                width={87}
                height={87}
                className="rounded-lg"
              ></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
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
                <Link href="/family-trees">
                  <li className="py-4 text-sm">Family Trees</li>
                </Link>
                <Link href="/contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
                <Link href="/store">
                  <li className="py-4 text-sm">Store</li>
                </Link>
                <Link href="/graduates">
                  <li className="py-4 text-sm">Alumni</li>
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
    <Link href={props.link}>
      <p className="text-sm uppercase m-1 hover:text-blue-500">{props.text}</p>
    </Link>
  );
}

export default NavBar;
