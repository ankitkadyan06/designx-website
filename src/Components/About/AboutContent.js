import React from "react";
import checkImage from '../Assets/Images/aboutUsImageone.png'
import spring from '../Assets/Images/backgroundSprings.svg'
import shop from '../Assets/Images/shopfloorMobile.svg'

const AboutContent = () => {
  return (
    <div className="aboutContent pb-[60px] pt-[1px] lg:pt-[0px]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <div className="mx-[30px] lg:mx-[80px] mt-[50px] text-justify relative z-[2]">
          <p className="text-[28px] lg:text-[32px] text-white font-poppins font-medium">
            Bring the revolutionary change to shop floors
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            Without a functional plan, managing shop floors is like solving
            Chinese arithmetic equations. Not exaggerating, but from equipment
            breaks to human errors; mistakes & slipups keep arising, and hence
            it becomes more challenging to manage manually by the workforce.
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            But with DesignX as your digital partner, you can light a fire &
            bring a revolutionary change to your shop floor. Automate your
            manufacturing hub and mark your beginning in pre-creating the
            future. Adopt the latest optimization strategies with an
            ultra-modern platform - DFOS (Digital Factory Operating System).
          </p>
        </div>
        <div>
            <img src={checkImage} alt="" className="relative z-[2] mx-auto mt-[50px]" />
            <img src={spring} alt="" className='absolute top-[87rem] lg:top-[55rem] right-0 hidden lg:block' />
        </div>

        <div>
          <img src={shop} alt="" className="mt-[70px] lg:mt-[0px]" />
        </div>
        <div className="mx-[50px] mt-[50px] lg:mt-[70px] text-justify">
          <p className="text-[28px] lg:text-[32px] text-white font-poppins font-medium">
            Switch to Smart Shopfloors with DFOS
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            DFOS is built to help you switch to the next generation of shop
            floors. It is a powerful combination of iBPM, RPA, IIOT, and AI.
            With our platform, you can entirely automate your shop floor and
            solve every complex problem.
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            We understand that digitization is not a one-size-fits-all solution.
            Every organization has some unique needs and challenges, and DFOS
            strives to understand those needs and creates tailored solutions
            that fit perfectly.
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#adadad] font-poppins">
            So, take the plunge to step into smart manufacturing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
