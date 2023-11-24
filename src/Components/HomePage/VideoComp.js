import React, { useState } from "react";
import "../Assets/CSS/VideoComp.css";
import play from "../Assets/Images/playButton.svg";
// import videoPreview from '../Assets/Images/videoPreview.svg'
import videoImagePreview from "../Assets/Images/videoImagepreview.svg";
// import videoDemo from "../Assets/Images/demo.mp4";
import videoView from '../Assets/Images/videoView.svg'

const VideoComp = ({ videoDfos, imageDfos }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };
  return (
    <div className="videoContainer">
      <div className="videoComp bg-[#282932] h-[700px] lg:h-[600px]">
        <div className="block lg:grid lg:grid-cols-2 gap-4 pt-[50px] lg:pt-[100px] videoContent">
          <div className="px-[10px] lg:px-[78px]">
            <p className="text-gradientVid text-[28px] md:text-[38px] text-white font-poppins capitalize">
              Harness the power of DFOS
            </p>
            <p className="text-white text-[14px] md:text-[18px]">
              Take your manufacturing plant to new heights by getting the utmost
              shop floor visibility, connectivity & real-time insights.
            </p>
            <div className="flex">
              <button className="demo text-white text-[18px] md:text-[24px] rounded-[5px] font-medium px-[23px] py-[5px] h-[58px]">
                Get a Demo
              </button>
              <button className="flex ml-[59px]">
                <img src={play} alt="" />
                <p className="text-white text-[20px] md:text-[25px] font-poppins font-semibold ml-[21px] py-[13px]">
                  View Video
                </p>
              </button>
            </div>
          </div>
          <div className="">
            {/* <img src={videoPreview} alt="" className="relative bottom-[70px]" /> */}
            <div className="w-[664px] h-[358px] rounded-[15px] video-container">
              {!isPlaying && (
                <>
                  <img
                    src={videoImagePreview}
                    alt="Video Preview"
                    className="preview-image w-[94%] ml-[3%] pt-[3%]"
                  />
                  <div className="play-button" onClick={playVideo}>
                    <img src={videoView} alt="" className="absolute bottom-[40%] left-[45%]" />
                  </div>
                </>
              )}
              <div>
                <video
                  controls
                  className={`rounded-[15px] ${
                    isPlaying ? "playing" : "hidden"
                  } w-[94%] ml-[3%] pt-[5%] rounded-[5px]`}
                >
                  <source src={videoDfos} type="video/mp4" />
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
