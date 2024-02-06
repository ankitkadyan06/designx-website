import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/VideoComp.css";
import play from "../Assets/Images/playButton.svg";
import videoImagePreview from "../Assets/Images/videoImagepreview.png";
import videoView from "../Assets/Images/videoView.svg";
import videoDemo from "../Assets/video/DFOS intro.mp4";
import separation from '../Assets/Images/separation.svg' ;
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoComp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);


  return (
    <div className="videoContainer">
      <div className="videoComp bg-[#282932] pb-[100px] h-auto ">
      <img data-aos="fade-up" src={separation} alt="" className="absolute top-[80px] left-[47%] z-[1] hidden lg:block" />   
      <p data-aos="fade-right" className="text-gradientVidHead block lg:hidden text-[22px] sm:text-[28px] md:text-[38px] ml-[15px] sm:ml-[30px] tracking-wide pt-[45px] text-white font-poppins capitalize font-medium underline underline-offset-8 decoration-[#00A1FF]">
              Harness the power of DFOS<sup className="text-gradientVid"><small>&trade;</small></sup>
            </p>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-[10px] sm:pt-[50px] lg:pt-[100px] px-[15px] sm:px-[30px] lg:px-[80px] videoContent">
          <div data-aos="fade-right" className="pr-[10px] md:pr-[30px] lg:pr-[50px] 2xl:pr-[80px] mt-[0%] lg:mt-[10%]">
            <p className="text-gradientVid text-[28px] md:text-[38px] text-white font-poppins tracking-wide font-medium capitalize hidden lg:block underline underline-offset-8 decoration-[#0049FF]">
              Harness the power of DFOS<small className="text-gradientVid decoration-transparent">&trade;</small>
            </p>
            <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] font-normal lg:text-[20px] tracking-wide leading-5 lg:leading-[30px] xl:leading-[36px]">
              Take your manufacturing plant to new heights by getting the utmost
              shop floor visibility, connectivity & real-time insights.
            </p>
            <div className="flex items-center">
              <Link to="/Contact">
                <button className="demo text-white text-[12px] sm:text-[14px] md:text-[18px] 2xl:text-[24px] tracking-wide rounded-[5px] font-medium px-[10px] sm:px-[23px] py-[0px] sm:py-[5px] h-[41px] lg:h-[58px]">
                  Request a Demo
                </button>
              </Link>
              <button
              className="flex justify-center items-center ml-[10px] xl:ml-[59px] h-[41px] lg:h-[58px]"
              onClick={playVideo}
            >
              <img src={play} alt="Play Icon" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
              <p className="text-white text-[12px] sm:text-[14px] ml-[5px] md:text-[18px] 2xl:text-[24px] tracking-wide font-poppins font-semibold py-[16px] sm:py-[13px] relative top-2">
                View Video
              </p>
            </button>
            </div>
          </div>
          <div data-aos="fade-left" className="w-[664px] border-[5px] lg:border-[10px] border-solid border-[#0046FF] rounded-[20px] video-container relative overflow-hidden">
            <div>
              {!isPlaying && (
                <div className="relative">
                  <img
                    src={videoImagePreview}
                    alt="Video Preview"
                    className="preview-image w-[100%]"
                  />
                  <div
                    className="play-button cursor-pointer"
                    onClick={playVideo}
                  >
                    <img
                      src={videoView}
                      alt="View Video"
                      className="absolute bottom-[40%] left-[45%] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                  </div>
                </div>
              )}
              <div>
                <video
                controls
                  ref={videoRef}
                  className={`rounded-[15px] ${isPlaying ? "playing" : "hidden"} w-[100%] rounded-[15px]`}
                  style={{transform: "translate(-50%, 0%)"}}
                >
                  <source src={videoDemo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
             
    </div>
  );
};

export default VideoComp;
