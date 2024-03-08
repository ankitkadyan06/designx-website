import React, { useState, useEffect } from "react";
import "../Assets/CSS/HeaderDemo.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/designXlogo.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Dropdown, ButtonToolbar } from "rsuite";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Product", to: "/Product" },
  { name: "About Us", to: "/about" },
];

const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}>
    <Dropdown.Item><Link to="/Blogs" className="no-underline text-white">Blogs</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/use-cases" className="no-underline text-white">Use Cases</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/newsletter" className="no-underline text-white">Newsletters</Link></Dropdown.Item>
  </Dropdown>
);
const HeaderDemo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  return (
    <div
      className={`sticky-header ${
        isSticky ? "fixed" : ""
      } border-b-[0.5px] border-solid border-[#adadad] font-poppins font-normal h-[60px] lg:h-[76px]`}
    >
      <header className="absolute inset-x-0 top-0 z-50 h-[70px]">
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 focus:outline-none ml-[2%]">
              <img src={logo} className="sm:h-10 h-6 w-auto" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center lg:gap-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative font-poppins font-normal"
              >
                <Link
                  to={item.to}
                  className="no-underline font-poppins text-[14px] sm:text-[18px] font-normal leading-6 text-white tracking-wider"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <ButtonToolbar className=" font-poppins text-[14px] sm:text-[18px] text-white outline-none flex">
              <CustomDropdown title="Resources" trigger="hover" className="absolute" />
            </ButtonToolbar>
          </div>
          <div className="hidden lg:flex lg:flex-1 gap-x-12 lg:justify-end items-center mr-[2%] tracking-wider">
            <Link
              to="/contact-us"
              className="text-[18px] leading-6 text-white no-underline  font-poppins font-normal"
            >
              Contact Us
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#00153F] px-6 pt-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img className="w-auto h-8" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="relative font-poppins font-normal"
                    >
                      <Link
                        to={item.to}
                        className="no-underline font-poppins text-[14px] sm:text-[18px] leading-6 text-white font-normal tracking-wider"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact-us"
                    className="-mx-3 block rounded-lg font-Poppins px-3 py-2.5 text-[14px] sm:text-[18px] no-underline leading-7 text-white hover:bg-gray-50  font-poppins font-normal tracking-wider"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};
export default HeaderDemo;
