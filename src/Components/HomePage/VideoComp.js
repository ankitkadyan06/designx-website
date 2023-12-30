import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/VideoComp.css";
import play from "../Assets/Images/playButton.svg";
import videoImagePreview from "../Assets/Images/videoImagepreview.svg";
import videoView from "../Assets/Images/videoView.svg";
import videoDemo from "../Assets/video/DFOS intro.mp4";

const VideoComp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="videoContainer">
      <div className="videoComp bg-[#282932] h-[700px] lg:h-[600px]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 pt-[50px] lg:pt-[100px] px-[30px] lg:px-[80px] videoContent">
          <div className="px-[10px] lg:px-[78px]">
            <p className="text-gradientVid text-[28px] md:text-[38px] text-white font-poppins capitalize">
              Harness the power of DFOS
            </p>
            <p className="text-white text-[14px] md:text-[18px]">
              Take your manufacturing plant to new heights by getting the utmost
              shop floor visibility, connectivity & real-time insights.
            </p>
            <div className="block md:flex lg:block xl:flex">
              <Link to="/Contact">
                <button className="demo text-white text-[14px] md:text-[24px] rounded-[5px] font-medium px-[23px] py-[5px] h-[58px]">
                  Get a Demo
                </button>
              </Link>
              <button
              className="flex mt-[10px] md:mt-[0px] lg:mt-[10px] xl:mt-[0px] ml-[0px] xl:ml-[59px]"
              onClick={playVideo}
            >
              <img src={play} alt="Play Icon" />
              <p className="text-white text-[20px] md:text-[25px] font-poppins font-semibold ml-[21px] py-[13px]">
                View Video
              </p>
            </button>
            </div>
          </div>
          <div className="w-[664px] border-[5px] border-solid border-[#0046FF] rounded-[15px] video-container relative overflow-hidden">
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
                      className="absolute bottom-[40%] left-[45%]"
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
