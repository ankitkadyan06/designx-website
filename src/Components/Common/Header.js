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
    <header className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <img src={Logo} alt="" className="ml-[77px]" />
      <nav>
        <ul className="flex text-white font-inter text-[21px] mt-[10px]">
          <Link to="/" className="no-underline text-white">Home</Link>
          <Link to="/Product" className="ml-[30px] no-underline text-white">Product</Link>
          <Link to="/Aboutus" className="ml-[30px] no-underline text-white">About Us</Link>
          <Link to="/Resources" className="ml-[30px] no-underline text-white">Resources</Link>
        </ul>
      </nav>
      <div className="flex mr-[80.22px]">
        <Link to="/Contact" className="text-white font-inter text-[21px] mt-[10px] no-underline">Contact Us</Link>
        <button className="rounded-[64px] bg-white text-[#00153F] font-semibold text-[16px] ml-[27px]" style={{padding:"0px 22.781px 0px 23px"}}>Demo</button>
      </div>
    </header>
  );
};

export default Header;
