import React, { useEffect, useState } from "react";
import "../Assets//CSS/HeaderDemo.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/designXlogo.svg";

const HeaderDemo = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/Product" },
    { title: "About Us", path: "/Aboutus" },
    { title: "Resources", path: "/Resources" },
  ];

  useEffect(() => {
    const closeMenu = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setMenuOpen(false);
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div
      className={`sticky-header ${
        isSticky ? "fixed" : ""
      } border-b-[0.5px] border-solid border-[#adadad] h-[76px]`}
    >
      <nav
        className={`pb-5 py-3 md:text-sm ${
          isMenuOpen
            ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
            : ""
        }`}
      >
        <div className="mx-auto px-4 md:flex md:px-8">
          <div className="flex justify-between items-center  md:block">
            <Link to="/">
              <img src={logo} width={120} height={50} alt="Float UI logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="menu-btn text-gray-500 hover:text-gray-800"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex items-center mt-8 md:mt-0 md:flex ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-700 hover:text-gray-900">
                  <Link to={item.path} className="block text-white font-poppins no-underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <Link to="/" className="block text-white hover:text-gray-900 font-poppins no-underline">
                Contact Us
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-[#00153F] font-medium bg-white hover:bg-gray-700 rounded-full md:inline-flex no-underline"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderDemo;
