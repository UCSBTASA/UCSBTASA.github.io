"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import navLinks from "@/data/navbar";
import moreNavLinks from "@/data/moreNavBar";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
});

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    }

    if (navOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navOpen]);

  return (
    <nav
      className={`${nanumMyeongjo.className} w-full h-20 bg-white text-black flex items-center justify-between px-6 md:px-8 sticky top-0 z-50 shadow-lg`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="TASA Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Center: Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-lg xl:gap-12 ml-auto mr-12 items-center lg:gap-4 sm:gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:opacity-80 px-4">
              <h1 className="block leading-tight text-gray-900 ">
                {link.name}
              </h1>
            </Link>
          </li>
        ))}
        <li className="group relative">
          <span className="hover:opacity-80 block leading-tight text-gray-900">
            More
          </span>
          <ul className="absolute left-0 mt-2 w-32 bg-white text-black shadow-lg rounded-lg group-hover:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            {moreNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-2 py-2 hover:bg-gray-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {/* Right: Cart Icon */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/store">
          <AiOutlineShoppingCart
            className="cursor-pointer hover:opacity-80"
            size={20}
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setNavOpen(true)}>
          <AiOutlineMenu size={25} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
          navOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-gray-900 p-6 transition-transform duration-300 ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <button onClick={() => setNavOpen(false)} className="p-2">
              <AiOutlineClose size={25} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="mt-6 space-y-4 text-lg text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block p-2"
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {moreNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block p-2"
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li key="/store">
              <Link
                href="/store"
                className="block p-2"
                onClick={() => setNavOpen(false)}
              >
                store
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
