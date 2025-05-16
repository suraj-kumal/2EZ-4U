"use client";
import React, { useEffect, useState } from "react";
import "@/app/global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  // Function to check if a link is active
  const isLinkActive = (href: string) => {
    // Check if pathname is exactly this href
    if (pathname === href) return true;

    // For nested routes, check if pathname starts with this href
    // But only if href is not just the root "/"
    if (href !== "/" && pathname.startsWith(href + "/")) return true;

    return false;
  };

  // Custom CSS for the navbar links
  const navLinkStyles = "relative";
  const desktopIndicatorStyles =
    "absolute left-0 right-0 bottom-0 h-0.5 bg-white transform transition-all duration-300 ease-in-out";
  const mobileIndicatorStyles =
    "absolute left-0 w-full bottom-0 h-0.5 bg-white transform transition-all duration-300 ease-in-out";

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
          <Link href="/courses" className={`${navLinkStyles}`}>
            <span>COURSES</span>
            <div
              className={`${desktopIndicatorStyles} ${
                isLinkActive("/courses")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <Link href="/neclicense" className={`${navLinkStyles}`}>
            <span>NEC LICENSE</span>
            <div
              className={`${desktopIndicatorStyles} ${
                isLinkActive("/neclicense")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <Link href="/" className={`${navLinkStyles} hidden`}>
            <span>BLOG</span>
            <div
              className={`${desktopIndicatorStyles} ${
                isLinkActive("/blog")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <Link href="/aboutus" className={`${navLinkStyles}`}>
            <span>ABOUT US</span>
            <div
              className={`${desktopIndicatorStyles} ${
                isLinkActive("/aboutus")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <a
            href="https://www.youtube.com/@easyexplanation9220"
            target="_blank"
            rel="noopener noreferrer"
            className=""
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
            className={`${navLinkStyles} w-fit py-1 transform transition-transform duration-200 hover:translate-x-1`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span>COURSES</span>
            <div
              className={`${mobileIndicatorStyles} ${
                isLinkActive("/courses")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <Link
            href="/neclicense"
            className={`${navLinkStyles} w-fit py-1 transform transition-transform duration-200 hover:translate-x-1`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span>NEC LICENSE</span>
            <div
              className={`${mobileIndicatorStyles} ${
                isLinkActive("/neclicense")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <Link
            href="/"
            className={`${navLinkStyles} w-fit py-1 transform transition-transform duration-200 hover:translate-x-1 hidden`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span>BLOG</span>
            <div
              className={`${mobileIndicatorStyles} ${
                isLinkActive("/blog")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <Link
            href="/aboutus"
            className={`${navLinkStyles} w-fit py-1 transform transition-transform duration-200 hover:translate-x-1`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span>ABOUT US</span>
            <div
              className={`${mobileIndicatorStyles} ${
                isLinkActive("/aboutus")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            ></div>
          </Link>
          <a
            href="https://www.youtube.com/@easyexplanation9220"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 transform transition-transform duration-200 hover:translate-x-1"
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
