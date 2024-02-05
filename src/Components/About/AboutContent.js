import React, { useEffect } from "react";
import checkImage from "../Assets/Images/aboutUsImageone.svg";
import spring from "../Assets/Images/backgroundSprings.svg";
import shop from "../Assets/Images/mockup.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div className="aboutContent pb-[20px] sm:pb-[60px] pt-[1px] lg:pt-[0px]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <div data-aos="fade-up" className="mx-[15px] sm:mx-[30px] xl:mx-[80px] mt-[50px]  relative z-[2]">
          <p className="text-[22px] md:text-[28px] lg:text-[32px] text-white font-poppins font-medium">
            Bring the revolutionary change to shop floors
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins hidden lg:block tracking-wide leading-[20px] lg:leading-[30px] xl:leading-[36px]">
            Without a functional plan, managing shop floors is like solving
            Chinese arithmetic equations. Not exaggerating, but from equipment
            breaks to human errors; mistakes & slipups keep arising, and hence
            it becomes more challenging to manage manually by the workforce.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins hidden lg:block tracking-wide leading-[20px] lg:leading-[30px] xl:leading-[36px]">
            But with DesignX as your digital partner, you can light a fire &
            bring a revolutionary change to your shop floor. Automate your
            manufacturing hub and mark your beginning in pre-creating the
            future. Adopt the latest optimization strategies with an
            ultra-modern platform - DFOS (Digital Factory Operating System).
          </p>
        </div>
        <div className="flex justify-center mx-[15px] sm:mx-[30px]">
          <img
            src={checkImage}
            alt=""
            className="relative z-[2] mt-[0px]"
            data-aos="fade-up"
          />
          <img
            src={spring}
            alt=""
            className="absolute top-[87rem] lg:top-[55rem] right-0 hidden lg:block"
          />
        </div>
        <div data-aos="fade-up" className="mx-[15px] sm:mx-[30px] block lg:hidden">
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            Without a functional plan, managing shop floors is like solving
            Chinese arithmetic equations. Not exaggerating, but from equipment
            breaks to human errors; mistakes & slipups keep arising, and hence
            it becomes more challenging to manage manually by the workforce.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            But with DesignX as your digital partner, you can light a fire &
            bring a revolutionary change to your shop floor. Automate your
            manufacturing hub and mark your beginning in pre-creating the
            future. Adopt the latest optimization strategies with an
            ultra-modern platform - DFOS (Digital Factory Operating System).
          </p>
        </div>
        <p data-aos="fade-up" className="text-[22px] md:text-[28px] lg:text-[32px] text-white font-poppins font-medium mx-[15px] sm:mx-[30px] block lg:hidden">
          Switch to Smart Shopfloors with DFOS<sup><small>&trade;</small></sup>
        </p>
        <div data-aos="fade-up" className="flex justify-center">
          <img src={shop} alt="" className="mt-[0px] lg:mt-[0px]" />
        </div>
        <div data-aos="fade-up" className="mx-[15px] sm:mx-[30px] lg:mx-[50px] mt-[0px] lg:mt-[70px] ">
          <p className="text-[16px] sm:text-[28px] lg:text-[32px] text-white font-poppins font-medium hidden lg:block">
            Switch to Smart Shopfloors with DFOS<sup><small>&trade;</small></sup>
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            DFOS is built to help you switch to the next generation of shop
            floors. It is a powerful combination of iBPM, RPA, IIOT, and AI.
            With our platform, you can entirely automate your shop floor and
            solve every complex problem.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            We understand that digitization is not a one-size-fits-all solution.
            Every organization has some unique needs and challenges, and DFOS
            strives to understand those needs and creates tailored solutions
            that fit perfectly.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            So, take the plunge to step into smart manufacturing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
