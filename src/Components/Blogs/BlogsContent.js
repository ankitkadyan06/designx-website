import React, { useEffect } from "react";
import blogPic from "../Assets/Images/blogPic.png";
import blogDetailMin from "../Assets/Images/blogDetailmin.png";
import iBPMS from "../Assets/Images/IOTBlogImage.png";
import iBPMSMin from "../Assets/Images/iBPMSDetailsMin.png";
import ArtificialIntelligence from "../Assets/Images/artificialBlog.png";
import ArtificialIntelligenceMin from "../Assets/Images/ArtificialDetailedMin.png";
import Hectos from "../Assets/Images/IOTBlog.svg";
import HectosMin from "../Assets/Images/IOTBlogMin.svg";
import ESGBlog from "../Assets/Images/ESGBlog.png";
import ESGBlogMin from "../Assets/Images/ESGBlogMin.png";
import { Link } from "react-router-dom";
import readMoreArrow from "../Assets/Images/readMoreArrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogsContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="mb-[60px] blogContent flex flex-col items-center">
      <div
        data-aos="fade-up"
        className="blogContentBackground flex flex-col lg:flex-row w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] mb-[41px]"
      >
        <img
          src={blogPic}
          alt=""
          className="rounded-24px hidden lg:block w-[40%]"
        />
        <img
          src={blogDetailMin}
          alt=""
          className="rounded-24px  block lg:hidden"
        />
        <div className="font-poppins pt-[10px] lg:pt-[41px] px-[10px] lg:px-[53px] w-full lg:w-[60%] pb-[20px]">
          <p className="text-white text-[16px] md:text-[24px] xl:text-[28px] font-medium">
            Industrial Internet of Things: Meaning, Benefits and Uses
          </p>
          <p className="text-[12px] md:text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Unveil a plethora of opportunities with IIOT solutions.
          </p>
          <Link to="/IIOT" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More{" "}
              <img
                src={readMoreArrow}
                alt=""
                className="w-[20px] lg:w-[27px]"
              />
            </button>
          </Link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="blogContentBackground flex flex-col lg:flex-row w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] mb-[41px]"
      >
        <img
          src={iBPMS}
          alt=""
          className="rounded-24px hidden lg:block w-[40%]"
        />
        <img src={iBPMSMin} alt="" className="rounded-24px block lg:hidden" />
        <div className="font-poppins pt-[10px] lg:pt-[41px] px-[10px] lg:px-[53px] w-full lg:w-[60%] pb-[20px]">
          <p className="text-white text-[16px] md:text-[24px] xl:text-[28px] font-medium">
            How DFOS empowers intelligent business process management
            suite(iBPMS)?{" "}
          </p>
          <p className="text-[12px] md:text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Leverage the benefits of Intelligent Business Process Management
            suite{" "}
          </p>
          <Link to="/iBPMS" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More{" "}
              <img
                src={readMoreArrow}
                alt=""
                className="w-[20px] lg:w-[27px]"
              />
            </button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="blogContentBackground flex flex-col lg:flex-row w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] mb-[41px]"
      >
        <img
          src={ArtificialIntelligence}
          alt=""
          className="rounded-24px hidden lg:block w-[40%]"
        />
        <img
          src={ArtificialIntelligenceMin}
          alt=""
          className="rounded-24px block lg:hidden"
        />
        <div className="font-poppins pt-[10px] lg:pt-[41px] px-[10px] lg:px-[53px] w-full lg:w-[60%] pb-[20px]">
          <p className="text-white text-[16px] md:text-[24px] xl:text-[28px] font-medium">
            How to Leverage the Benefits of Artificial Intelligence?{" "}
          </p>
          <p className="text-[12px] md:text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Back in the 90s, artificial intelligence and machine learning were
            only algorithms and systems, but now....
          </p>
          <Link to="/ArtificialIntelligence" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More{" "}
              <img
                src={readMoreArrow}
                alt=""
                className="w-[20px] lg:w-[27px]"
              />
            </button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="blogContentBackground flex flex-col lg:flex-row w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] mb-[41px]"
      >
        <img
          src={Hectos}
          alt=""
          className="rounded-24px hidden lg:block w-[40%]"
        />
        <img src={HectosMin} alt="" className="rounded-24px block lg:hidden" />
        <div className="font-poppins pt-[10px] lg:pt-[41px] px-[10px] lg:px-[53px] w-full lg:w-[60%] pb-[20px]">
          <p className="text-white  text-[16px] md:text-[24px] xl:text-[28px] font-medium">
            IOT Edge Gateway – Hectos
          </p>
          <p className="text-[12px] md:text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Bridge the network gap with the power of an IoT edge gateway
          </p>
          <Link to="/IOTGateway" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More{" "}
              <img
                src={readMoreArrow}
                alt=""
                className="w-[20px] lg:w-[27px]"
              />
            </button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="blogContentBackground flex flex-col lg:flex-row w-[88%] h-auto border-[5px] border-solid border-[#0943CB] rounded-[24px] mb-[41px]"
      >
        <img
          src={ESGBlog}
          alt=""
          className="rounded-24px hidden lg:block lg:w-[40%]"
        />
        <img src={ESGBlogMin} alt="" className="rounded-24px block lg:hidden" />
        <div className="font-poppins pt-[10px] lg:pt-[41px] px-[10px] lg:px-[53px] w-full lg:w-[60%] pb-[20px]">
          <p className="text-white  text-[16px] md:text-[24px] xl:text-[28px] font-medium">
            How can factories meet ESG Goals?
          </p>
          <p className="text-[12px] md:text-[14px] xl:text-[18px] text-[#adadad] font-medium">
            Sustainability is a buzz word these days as Gen Z pays heed to the
            approach followed by factories to manufacture...
          </p>
          <Link to="/ESG" className="no-underline">
            <button className="blogReadButton flex items-center justify-around w-[120px] sm:w-[151px] h-[40px] rounded-[7px] font-inter text-[12px] sm:text-[14px] text-white">
              Read More{" "}
              <img
                src={readMoreArrow}
                alt=""
                className="w-[20px] lg:w-[27px]"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsContent;
