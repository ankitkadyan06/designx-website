import React from "react";
import heroImage from "../Assets/Images/heroimage.svg";
import "../Assets/CSS/HeroSection.css";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <div>
      <img src={heroImage} alt="" className="absolute w-full z-[-1]" />
      <div className="relative top-[120px]">
        <div className="text-white text-[43px] font-poppins capitalize text-center">
          millions of data points, but only 1% reaches
          <br /> decision-makers
        </div>
        <div className="text-[#DADADA] text-[18px] mt-[10px] text-center">
          Capture remaining 99% data points by digitizing end-to-end
          manufacturing processes with DFOS
        </div>
        <button className="btn-start text-[24px] text-white font-medium w-[170px] h-[56px] rounded-[11px] ml-[44.2%] mt-[50px]">
          Start Today
        </button>
      </div>
      <div className="backNo block lg:flex justify-around w-full px-[50px] h-[350px] md:h-auto p-[60px] md:p-[50px] mt-[37%]">
        <div className="font-poppins text-xl text-center md:text-[28px] xl:text-[68px]">
          <CountUp start={0} end={350} delay={1} className="text-gradient"/>
          <span className="text-gradient">+</span>
          <p className="text-[16px] text-white sm:text-[20px] xl:text-[18px] lg:w-[100%] relative p-2 mt-[20px]">
            Manufacturing Plants
          </p>
        </div>
        <div className="font-poppins text-center text-xl md:text-[28px] xl:text-[68px]">
          <CountUp start={0} end={40} delay={1}  className="text-gradient"/>
          <span className="text-gradient">+</span>
          <p className="text-[16px] text-white sm:text-[20px] xl:text-[18px] relative p-2 mt-[20px]">
            Customers
          </p>
        </div>
        <div className="font-poppins text-center text-xl md:text-[28px] xl:text-[68px]">
          <CountUp start={0} end={1550} delay={1} className="text-gradient"/>
          <span className="text-gradient">+</span>
          <p className="text-[16px] text-white sm:text-[20px] xl:text-[18px] relative p-2 mt-[20px]">
            Project Excluded
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
