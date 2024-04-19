import React from "react";
import christmas from "../Assets/Images/christmas.svg";
import newsletterOne from "../Assets/Images/newsletter1.svg";
import newsletterThree from "../Assets/Images/newsletter3.svg";
import newsletterfour from "../Assets/Images/newsLetter4.svg";

const NewsletterData = () => {
  return (
    <div>
      <div className="block lg:grid grid-cols-2 gap-4">
        <div className="newNewsletter pl-[50px] lg:pl-[145px] pr-[31px] pt-[45px] pb-[20px] lg:pb-[0px]">
          <img src={christmas} alt="" className="w-full" />
          <p className="text-[32px] text-white font-poppins font-medium mt-[30px]">
            Unwrap Digitalization with DesignX
          </p>
          <p className="text-[18px] text-[#D4D4D4] font-poppins font-normal">
            Wishing you a Christmas Season sprinkled with moments of joy, dash
            of adventure, and a pinch of serenity.
          </p>
          <p className="text-[18px] text-[#D4D4D4] font-poppins font-normal">
            This Christmas unwrap the box of digitalization & leverage the
            benefits of smart manufacturing with DesignX.
          </p>
        </div>
        <div className="pt-[40px] pl-[30px] h-[80%]">
          <p className="text-[32px] text-white font-poppins">
            Check out our recent newsletters
          </p>
          <div className="h-full overflow-y-scroll">
            <div className="grid grid-cols-2 gap-4 pb-[20px] h-[150px]">
              <div>
                <p className="text-[16px] text-white font-poppins font-normal tracking-wide">
                  New Year, New Shopfloor
                </p>
                <p className="text-[14px] text-[#D4D4D4] font-poppins font-light tracking-wide">
                  This year make your shopfloor enhanced by:
                </p>
                <p className="text-[12px] text-white font-poppins font-light tracking-wide">
                  Published on:{" "}
                  <span className="text-[#0052FF] font-normal">
                    {" "}
                    24-05-2023
                  </span>
                </p>
              </div>
              <div>
                <img src={newsletterfour} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-[20px] h-[150px]">
              <div>
                <p className="text-[16px] text-white font-poppins font-normal tracking-wide">
                  Industry Insights By DesignX
                </p>
                <p className="text-[14px] text-[#D4D4D4] font-poppins font-light tracking-wide">
                  American Manufacturing is becoming less efficient?
                </p>
                <p className="text-[12px] text-white font-poppins font-light tracking-wide">
                  Published on:{" "}
                  <span className="text-[#0052FF] font-normal">
                    {" "}
                    24-05-2023
                  </span>
                </p>
              </div>
              <div>
                <img src={newsletterfour} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-[20px] h-[150px]">
              <div>
                <p className="text-[16px] text-white font-poppins font-normal tracking-wide">
                  Simplify Breakdown
                </p>
                <p className="text-[14px] text-[#D4D4D4] font-poppins font-light tracking-wide">
                  Discover how DFOS assisted in Breakdown Management!
                </p>
                <p className="text-[12px] text-white font-poppins font-light tracking-wide">
                  Published on:{" "}
                  <span className="text-[#0052FF] font-normal">
                    {" "}
                    24-05-2023
                  </span>
                </p>
              </div>
              <div>
                <img src={newsletterThree} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-[20px] h-[150px]">
              <div>
                <p className="text-[16px] text-white font-poppins font-normal tracking-wide">
                  Simplify UA & UC
                </p>
                <p className="text-[14px] text-[#D4D4D4] font-poppins font-light tracking-wide">
                  A routine day took a devastating turn for one of our clients
                  as their factory was close to catching fire. Find out how?
                </p>
                <p className="text-[12px] text-white font-poppins font-light tracking-wide">
                  Published on:{" "}
                  <span className="text-[#0052FF] font-normal">
                    {" "}
                    24-05-2023
                  </span>
                </p>
              </div>
              <div>
                <img src={newsletterOne} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-[20px] h-[150px]">
              <div>
                <p className="text-[16px] text-white font-poppins font-normal tracking-wide">
                  Simplify Preventive Maintenance
                </p>
                <p className="text-[14px] text-[#D4D4D4] font-poppins font-light tracking-wide">
                  Without a functional plan, managing shop floors is like
                  solving Chinese arithmetic equations.{" "}
                </p>
                <p className="text-[12px] text-white font-poppins font-light tracking-wide">
                  Published on:{" "}
                  <span className="text-[#0052FF] font-normal">
                    {" "}
                    24-05-2023
                  </span>
                </p>
              </div>
              <div>
                <img src={newsletterOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterData;
