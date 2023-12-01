import React, { useState } from "react";
import invertedComma1 from "../Assets/Images/invertedComma1.svg";
import invertedComma2 from "../Assets/Images/invertedComma2.svg";
import dummy from '../Assets/Images/dummyCircle.svg';
import twitter from '../Assets/Images/twitter.svg';
import facebook from '../Assets/Images/facebook.svg';
import linkedin from '../Assets/Images/linkedin.svg'; 

const Founders = () => {
  const [hoveredFounder, setHoveredFounder] = useState(null);

  const handleFounderHover = (founderName) => {
    setHoveredFounder(founderName);
  };

  return (
    <div className="founder pl-[80px] pt-[100px] pb-[50px]">
      <div className="block lg:grid lg:grid-cols-2 gap-4">
        <div>
          <p className="text-[46px] text-white font-poppins font-medium underline underline-offset-[10px] decoration-[#7292f1]">
            Meet Our Prominent Innovators
          </p>
          <div className="bg-[#282932] w-[646px] h-[280px] rounded-[17px] pt-[13px] mt-[90px] founderDetails">
            <img src={invertedComma1} alt="" className="ml-[23px]" />
            <p className="text-[28px] text-white font-poppins font-medium ml-[51px]">
              {hoveredFounder ? hoveredFounder.name : "Rajat Srivastav"}
            </p>
            <p className="text-[20px] text-white font-poppins font-normal ml-[51px]">
              {hoveredFounder ? hoveredFounder.description : "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies."}
            </p>
            <img src={invertedComma2} alt="" className="ml-[87%]" />
          </div>
        </div>
        <div className="flex">
          <div
            className="bg-[#282932] w-[313px] h-[506px] rounded-[17px] pt-[65px] cardFounder"
            onMouseEnter={() =>
              handleFounderHover({
                name: "Rajat Srivastav",
                description:
                  "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies."
              })
            }
          >
            <img src={dummy} alt="" className="ml-[46px]" />
            <p className="CEO text-[28px] font-poppins font-medium text-center mt-[66px]">Rajat Srivastav</p>
            <p className="text-[#a0a0a0] text-[24px] font-poppins text-center">CEO</p>
            <div className="flex justify-around mt-[20px]">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>
          </div>
          <div
            className="bg-[#282932] w-[313px] h-[506px] rounded-[17px] pt-[65px] cardFounder ml-[28px]"
            onMouseEnter={() =>
              handleFounderHover({
                name: "Nishant Srivastav",
                description: "An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies."
              })
            }
          >
            <img src={dummy} alt="" className="ml-[46px]" />
            <p className="CEO text-[28px] font-poppins font-medium text-center mt-[66px]">Nishant Srivastav</p>
            <p className="text-[#a0a0a0] text-[24px] font-poppins text-center">CTO</p>
            <div className="flex justify-around mt-[20px]">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
