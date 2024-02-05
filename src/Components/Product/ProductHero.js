import React, { useEffect } from "react";
import '../Assets/CSS/Product.css'
import globe from '../../globe.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductHero = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      });
    }, []);
  return (
    <div className="productHero flex flex-col-reverse md:flex-row bg-[#000210]">
      <div data-aos="fade-up" className="font-poppins pt-[0px] lg:pt-[30px] mt-[0px] lg:mt-[00px] xl:mt-[50px] px-[15px] sm:px-[30px] xl:px-[80px] w-full md:w-[50%]">
        <p className="text-white text-[22px] pt-0 md:pt-[70px] md:text-[28px] lg:text-[43px] mt-[10px] md:mt-[70px] tracking-wide w-[90%] font-medium">
          Revolutionize Your Shop Floor With DFOS<sup><small>&trade;</small></sup>!
        </p>
        <p className="text-[#adadad] text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] leading-[20px] lg:leading-[30px] xl:leading-[36px] tracking-wide pr-[0px] xl:pr-[55px] w-[90%]">
          DFOS (Digital Factory Operating System) is a SaaS-based DIY platform
          to design, analyse, automate, and measure shop floor processes. It is
          relevant to 2 million+ factories worldwide helping to improvise their
          manufacturing operations. It eliminates human errors and saves time,
          which assists in expanding the business exponentially.
        </p>
      </div>
      <div data-aos="fade-up" className="w-full md:w-[50%] pt-[90px]">
      <video autoPlay muted loop playsInline className="mt-[-70px]">
        <source src={globe} type="video/mp4" />
      </video>
      </div>
    </div>
  );
};

export default ProductHero;