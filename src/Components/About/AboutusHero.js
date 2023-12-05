import React from "react";
import "../Assets/CSS/AboutusHero.css";
import Marquee from "react-fast-marquee";
import unilever from "../Assets/Images/unilever.svg";
import amber from "../Assets/Images/amber.svg";
import dabur from "../Assets/Images/daber.svg";
import toray from "../Assets/Images/torey.svg";
import hero from "../Assets/Images/hero.svg";
import tvs from "../Assets/Images/tvs.svg";
const AboutusHero = () => {
  return (
    <div className="heroAbout pt-[70px] h-auto pb-[50px]">
      <p className="text-[35px] lg:text-[43px] text-white font-poppins w-[70%] lg:w-[50%] mt-[15%] ml-[5%] lg:ml-[50%]">
      Streamline the manufacturing process to build next generation shop floors
      </p>
      <p className="mt-[238px] ml-[85px] text-[28px] lg:text-[32px] text-white font-poppins font-medium underline underline-offset-8">
        Trusted By
      </p>
      <div className="mx-[60px] lg:mx-[85px]">
      <Marquee>
        <img src={unilever} alt="" />
        <img src={amber} alt="" className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]" />
        <img src={dabur} alt="" className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]" />
        <img src={toray} alt="" className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]" />
        <img src={hero} alt="" className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]" />
        <img src={tvs} alt="" className="ml-[40px] lg:ml-[120px] 2xl:ml-[150px]" />
      </Marquee>
      </div>
    </div>
  );
};

export default AboutusHero;
