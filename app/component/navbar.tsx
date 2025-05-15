"use client";
import React, { useEffect, useState } from "react";
import "@/app/global.css";
import Link from "next/link";
import { styleText } from "util";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);

      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="bg-[#1675ab] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer logo">
            <div className="bg-white text-[#1675ab] font-bold text-3xl px-3 py-1">
              E
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-base md:text-lg">
                EASYEXPLANATION
              </h1>
              <span className="h-0.5 bg-white w-full mt-.5 mb-1"></span>
              <p className="text-white text-xs font-semibold leading-none">
                LEARNING MADE EASIER
              </p>
            </div>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white font-bold text-sm">
          <Link href="/courses" className="hover:underline">
            COURSES
          </Link>
          <Link href="/neclicense" className="hover:underline">
            NEC LICENSE
          </Link>
          <Link href="/" className="hover:underline hidden">
            BLOG
          </Link>
          <Link href="/aboutus" className="hover:underline">
            ABOUT US
          </Link>
          <a
            href="https://www.youtube.com/@easyexplanation9220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YOUTUBE
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu with Animation */}
      <div
        className={`md:hidden absolute z-50 w-full bg-[#1675ab] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-2 space-y-3 text-white font-bold text-sm">
          <Link
            href="/courses"
            className="hover:underline py-1 transform transition-transform duration-200 hover:translate-x-1"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            COURSES
          </Link>
          <Link
            href="/neclicense"
            className="hover:underline py-1 transform transition-transform duration-200 hover:translate-x-1"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            NEC LICENSE
          </Link>
          <Link
            href="/"
            className="hover:underline py-1 transform transition-transform duration-200 hover:translate-x-1 hidden"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            BLOG
          </Link>
          <Link
            href="/aboutus"
            className="hover:underline py-1 transform transition-transform duration-200 hover:translate-x-1"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            ABOUT US
          </Link>
          <a
            href="https://www.youtube.com/@easyexplanation9220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline py-1 transform transition-transform duration-200 hover:translate-x-1"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
