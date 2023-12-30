import React, { useState, useEffect } from "react";
import "../Assets//CSS/HeaderDemo.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/designXlogo.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import downArrow from'../Assets/Images/downArrow.svg';
import { Tooltip } from 'react-tooltip';

const navigation = [
  { name: "Home", to: "/" },
  { name: "Product", to: "/Product" },
  { name: "About Us", to: "/Aboutus" },
  { name: "Resources", to: "/Resources" },
];
const HeaderDemo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

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
      } border-b-[0.5px] border-solid border-[#adadad] font-poppins font-normal h-[76px]`}
    >
      <header className="absolute inset-x-0 top-0 z-50 h-[70px]">
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 focus:outline-none ml-[2%]">
              <img src={logo} className="h-8 w-auto" alt="" />
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative font-poppins font-normal">
                {item.name === "Resources" ? (
                  <>
                    <button
                      className="no-underline font-poppins flex text-[18px] leading-6 text-white cursor-pointer focus:outline-none"
                      onClick={() =>
                        setShowResourcesDropdown(!showResourcesDropdown)
                      }
                    >
                      {item.name} <img src={downArrow} alt='' className="w-[20px] h-[20px] mt-[3px]"/>
                    </button>
                    {showResourcesDropdown && (
                      <div className="absolute mt-2 space-y-2 bg-[#001141] border-[1px] border-solid border-[#adadad] text-white rounded-md shadow-lg">
                        <Link
                          to="/Blogs"
                          className="block px-4 py-2 no-underline text-white font-poppins font-light"
                        >
                          Blogs
                        </Link>
                        <Link
                          to="#"
                          className="block px-4 py-2 no-underline text-white font-poppins font-light"
                        >
                          Newsletters
                        </Link>
                        <Link
                          to="#"
                          className="block px-4 py-2 no-underline text-white font-poppins font-light"
                        >
                          Use Cases
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="no-underline font-poppins text-[18px] font-normal leading-6 text-white"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 gap-x-12 lg:justify-end mr-[0%] xl:mr-[8%]">
            <Link
              to="/Contact"
              className="text-[18px] leading-6 text-white no-underline mt-[3%] xl:mt-[1.7%] font-poppins font-normal"
            >
              Contact Us
            </Link>
            <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Coming Soon"
              to="#"
              className="text-[16px] leading-6 text-[#00153F] no-underlines font-inter bg-white rounded-[64px] py-[10px] px-[10px]"
            >
              Demo
            </button>
            <Tooltip id="my-tooltip" />
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#00153F] px-6 py-20 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src={logo} alt="" />
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
                    <div key={item.name} className="relative font-poppins font-normal">
                      {item.name === "Resources" ? (
                        <>
                          <button
                            className="no-underline font-poppins flex text-[18px] leading-6 text-white cursor-pointer focus:outline-none"
                            onClick={() =>
                              setShowResourcesDropdown(!showResourcesDropdown)
                            }
                          >
                            {item.name} <img src={downArrow} alt='' className="w-[20px] h-[20px] mt-[3px]"/>
                          </button>
                          {showResourcesDropdown && (
                            <div className="absolute mt-2 space-y-2 bg-[#00153F] text-white rounded-md shadow-lg border-[1px] border-solid border-[#adadad]">
                              <Link
                                to="/Blogs"
                                className="block px-4 py-2 no-underline text-white font-poppins font-normal"
                              >
                                Blogs
                              </Link>
                              <Link
                                to="#"
                                className="block px-4 py-2 no-underline text-white font-poppins font-normal"
                              >
                                Newsletters
                              </Link>
                              <Link
                                to="#"
                                className="block px-4 py-2 no-underline text-white font-poppins font-normal"
                              >
                                Use Cases
                              </Link>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.to}
                          className="no-underline font-poppins text-[18px] leading-6 text-white font-normal"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/Contact"
                    className="-mx-3 block rounded-lg font-Poppins px-3 py-2.5 text-[18px] no-underline leading-7 text-white hover:bg-gray-50  font-poppins font-normal"
                  >
                    Contact Us
                  </Link>
                  <button
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Coming Soon"
                    to="#"
                    className="-mx-3 block rounded-[64px] font-inter px-3 py-2.5 text-base no-underline leading-7 text-[#00153F] bg-white hover:bg-gray-50"
                  >
                    Demo
                  </button>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isSticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navigation = [
//     { title: "Home", path: "/" },
//     { title: "Product", path: "/Product" },
//     { title: "About Us", path: "/Aboutus" },
//     { title: "Resources", path: "/Resources" },
//   ];

//   useEffect(() => {
//     const closeMenu = (e) => {
//       const target = e.target;
//       if (!target.closest(".menu-btn")) setMenuOpen(false);
//     };

//     document.addEventListener("click", closeMenu);

//     return () => {
//       document.removeEventListener("click", closeMenu);
//     };
//   }, []);

//   return (
//     <div
//       className={`sticky-header ${
//         isSticky ? "fixed" : ""
//       } border-b-[0.5px] border-solid border-[#adadad] h-[76px]`}
//     >
//       <nav
//         className={`pb-5 py-3 md:text-sm ${
//           isMenuOpen
//             ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
//             : ""
//         }`}
//       >
//         <div className="mx-auto px-4 md:flex md:px-8">
//           <div className="flex justify-between md:block">
//             <Link to="/">
//               <img src={logo} width={120} height={50} alt="Float UI logo" />
//             </Link>
//             <div className="md:hidden">
//               <button
//                 className="menu-btn text-gray-500 hover:text-gray-800"
//                 onClick={() => setMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//           <div
//             className={`flex ml-[16rem] items-center mt-8 md:mt-0 md:flex ${
//               isMenuOpen ? "block" : "hidden"
//             }`}
//           >
//             <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
//               {navigation.map((item, idx) => (
//                 <li key={idx} className="text-gray-700 hover:text-gray-900">
//                   <Link to={item.path} className="block text-white text-[16px] 2xl:text-[21px] font-poppins no-underline">
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex ml-[22rem] gap-x-6 justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
//               <Link to="/Contact" className="block text-white text-[21px] font-poppins no-underline pt-[10px]">
//                 Contact Us
//               </Link>
//               <button
//                 to="/"
//                 className="flex text-[16px] justify-center gap-x-1 py-2.5 px-4 text-[#00153F] font-medium bg-white rounded-full md:inline-flex no-underline"
//               >
//                 Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

export default HeaderDemo;
