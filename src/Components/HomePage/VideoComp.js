import React, { useState } from "react";
import "../Assets/CSS/VideoComp.css";
import play from "../Assets/Images/playButton.svg";
// import videoPreview from '../Assets/Images/videoPreview.svg'
import videoImagePreview from "../Assets/Images/videoImagepreview.svg";
import videoDemo from "../Assets/Images/demo.mp4";

const VideoComp = () => {
  const [isPlaying, setPlaying] = useState(false);
  const handlePreviewClick = () => {
    setPlaying(!isPlaying);
  };
  return (
    <div className="videoContainer">
      <div className="videoComp bg-[#282932]">
        <div className="flex pt-[100px] videoContent">
          <div className="w-[50%] pl-[78px] pr-[200px]">
            <p className="text-gradientVid text-[38px] text-white font-poppins capitalize">
              Harness the power of DFOS
            </p>
            <p className="text-white text-[18px]">
              Take your manufacturing plant to new heights by getting the utmost
              shop floor visibility, connectivity & real-time insights.
            </p>
            <div className="flex">
              <button className="demo text-white text-[24px] rounded-[5px] font-medium px-[23px] py-[5px] h-[58px]">
                Get a Demo
              </button>
              <button className="flex ml-[59px]">
                <img src={play} alt="" />
                <p className="text-white text-[25px] font-poppins font-semibold ml-[21px] py-[13px]">
                  View Video
                </p>
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            {/* <img src={videoPreview} alt="" className="relative bottom-[70px]" /> */}
            <div className="w-[664px] h-[358px] rounded-[15px] video-container">
              <div onClick={handlePreviewClick}>
                <video controls className="rounded-[15px]">
                  <source src={videoDemo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img
                  className="video-preview rounded-[15px]"
                  src={videoImagePreview}
                  alt="Video Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComp;
