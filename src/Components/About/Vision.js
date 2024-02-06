import React, { useEffect } from "react";
import split from "../Assets/Images/partGradient.svg";
import VisHor from '../Assets/Images/visionHorizontal.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div className="vision py-[27px] px-[15px] sm:px-[40px] lg:px-[80px] w-full h-auto lg:h-[214px]">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div data-aos="fade-right" className="w-full sm:w-[45%]">
          <p className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white font-poppins font-medium tracking-wide leading-[20px] lg:leading-[36px]">
            Our Vision
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#adadad] font-poppins tracking-wide leading-[20px] lg:leading-[36px]">
            To accelerate transition of manufacturing industry towards digital
            transformation through DFOS
          </p>
        </div>
        <div className="w-[10%] ml-[60px] hidden sm:block" data-aos="fade-up">
          <img src={split} alt="" />
        </div>
        <img src={VisHor} alt="" className="block sm:hidden w-full mb-[20px]" data-aos="fade-up"/>
        <div className="w-full sm:w-[45%]" data-aos="fade-left">
          <p className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white font-poppins font-medium tracking-wide leading-[20px] lg:leading-[36px]">
            Our Mission
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#adadad] font-poppins tracking-wide leading-[20px] lg:leading-[36px]">
            To pre-create the manufacturing future with self-serving tech
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
