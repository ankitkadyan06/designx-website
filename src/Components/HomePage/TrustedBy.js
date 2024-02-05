import React, { useEffect } from "react";
import "../Assets/CSS/TrustedBy.css";
import client from "../Assets/Images/trustedByHome.svg";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrustedBy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="trustedBy pb-[30px]">
      <p data-aos="fade-up" className="text-gradientTrust tracking-wide text-[22px] lg:text-[38px] font-poppins block lg:hidden pt-[50px] px-[10px] lg:px-[40px] xl:px-[80px] font-medium">
       <span className="underline underline-offset-8 decoration-[#0049FF]">Trusted </span> by
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 pt-[10px] sm:pt-[50px] lg:pt-[100px] pb-[20px]">
        <div className="px-[10px] flex justify-center" data-aos="fade-up">
          <img src={client} alt="" />
        </div>
        <div data-aos="fade-up" className="px-[15px] sm:px-[30px] md:px-[50px] 2xl:px-[80px]">
          <p className="text-gradientTrust tracking-wide text-[28px] lg:text-[38px] font-poppins hidden lg:block font-medium ">
          <span className="underline underline-offset-8 decoration-[#0049FF]">Trusted </span> by
          </p>
          
          <p className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] tracking-wide text-white font-poppins font-medium">
            Leverage the Future of Shop Floor Transformation
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] tracking-wide text-white leading-[20px] lg:leading-[30px] xl:leading-[36px] font-poppins font-light">
            Some of the leading players of the manufacturing industry have
            transformed their shop floors by leveraging the SaaS-based platform,
            DFOS and exhibited exemplary digital outcomes.
          </p>
          <Link to="/Contact">
            <button className="bg-white text-[#001141] text-[12px] sm:text-[14px] lg:text-[18px] tracking-wide p-[10px] rounded-[5px] font-poppins font-medium">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
