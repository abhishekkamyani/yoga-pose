import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-slate-700 shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-black dark:text-main">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/"
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../images/yoga_logo_rm_bg.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Yoga AI
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <Link to="/"  className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us"  className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact-us"  className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
        <span className="block text-sm sm:text-center">
          © {new Date().getFullYear()} {" "}
          <Link to="/" className="hover:underline">
            Yoga AI™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
