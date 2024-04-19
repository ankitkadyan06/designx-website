import React from "react";
import "../Assets/CSS/Newsletter.css";
import separateSubscribe from "../Assets/Images/separateSubscribe.svg";
import newsletterImage from "../Assets/Images/New Gif.gif";

const SubscribeNewsletter = () => {
  return (
    <div>
      <div className="block lg:flex justify-between items-center mx-[40px] pt-[20px]">
        <div className="pr-[0px] lg:pr-[50px] w-[100%] lg:w-[50%]">
          <p className="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[46px] text-white font-poppins font-semibold">
            Subscribe to Our Newsletter
          </p>
          <p className="text-[14px] md:text-[18px] lg:text-[20px] text-white font-poppins font-[400]">
            Get regular updates about the latest trends in the smart
            manufacturing industry. Also, have a glimpse of some exciting
            features in DFOS.
          </p>
          <form className="flex">
            <input
              type="text"
              className="w-[75%] h-[40px] md:h-[48px] lg:h-[53px] border-l-[1px] rounded-l-[5px] focus:outline-none pl-[10px]"
            />
            <button
              type="submit"
              className="subscribeButton h-[40px] md:h-[48px] lg:h-[53px] text-white text-[14px] md:text-[16px] lg:text-[20px] font-poppins font-medium rounded-r-[5px] px-[16px] py-[12px]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="pr-[30px] w-[10%] hidden lg:block">
          <img src={separateSubscribe} alt="" />
        </div>
        <div className="w-[40%] hidden lg:block">
          <img src={newsletterImage} alt="" />
        </div>
      </div>
      <div className="infoSubs text-[14px] md:text-[18px] text-[#D4D4D4] text-center mt-[30px] py-[15px]">
        Subscribe & get the latest updates about the manufacturing industry &
        mark the beginnings towards digital transformation.
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
