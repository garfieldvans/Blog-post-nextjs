"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
import { useState } from "react";

const Header: React.FC = () => {
  const currentPath = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky inset-x-0 inset-y-0 py-4 md:px-18 px-10 flex items-center bg-yellow-300 drop-shadow-lg Containers z-40">
      <div className=" mr-6 ">
        <h2 className="text-black text-md md:text-lg font-bold logo">NEXT Admin</h2>
      </div>
      <div className=" font-medium text-base py-2 hidden md:flex md:flex-row ">
        <Link
          href="/pages/blogs"
          className={`py-2 px-5 w-24 justify-center flex ${
            currentPath === "/pages/blogs" ? "font-bold bg-yellow-400 rounded-md" : ""
          }`}
        >
          Blogs
        </Link>
        <Link
          href="/pages/users"
          className={`py-2 px-5 w-24 justify-center flex ${
            currentPath === "/pages/users" ? "font-bold bg-yellow-400 rounded-md" : ""
          }`}
        >
          User
        </Link>
      </div>
      <div className="sm:hidden ml-auto">
        <button
          className="block text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full inset-y-0 right-0 bg-yellow-300 flex flex-col w-4/12 h-screen ">
          <Link
            href="/pages/blogs"
            className={`py-2 px-5 ${
              currentPath === "/pages/blogs"
                ? "font-bold bg-yellow-400 rounded-md"
                : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/pages/users"
            className={`py-2 px-5 ${
              currentPath === "/pages/users"
                ? "font-bold bg-yellow-400 rounded-md"
                : ""
            }`}
          >
            User
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
