import React, { useState, useEffect } from "react";
import "../Assets/CSS/Header.css";
import Logo from "../Assets/Images/designXlogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
    <header className={`sticky-header ${isSticky ? "fixed" : ""} border-b-[0.5px] border-solid border-[#adadad]`}>
      <img src={Logo} alt="" className="ml-[50px] sm:ml-[67px] md:ml-[77px] md:w-[200px] xl:w-[248px] md:h-[50px] xl:h-[56px]" />
      <nav>
        <ul className="flex text-white font-inter text-[14px] sm:text-[16px] lg:text-[21px] mt-[10px]">
          <Link to="/" className="no-underline text-white">Home</Link>
          <Link to="/Product" className="ml-[30px] no-underline text-white">Product</Link>
          <Link to="/Aboutus" className="ml-[30px] no-underline text-white">About Us</Link>
          <Link to="/Resources" className="ml-[30px] no-underline text-white">Resources</Link>
        </ul>
      </nav>
      <div className="flex">
        <Link to="/Contact" className="text-white font-inter text-[16px] md:text-[21px] mt-[10px] no-underline">Contact Us</Link>
        <button className="rounded-[64px] bg-white text-[#00153F] font-semibold text-[14px] md:text-[16px] ml-[27px] px-[18px] md:px-[23px] py-[0px]">Demo</button>
      </div>
    </header>
  );
};

export default Header;