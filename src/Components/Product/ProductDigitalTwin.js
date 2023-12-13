import React from "react";
import digitalTwin from "../Assets/Images/shopfloorView.svg";
import readMoreArrow from '../Assets/Images/readMoreArrow.svg'
import { Link } from "react-router-dom";
const ProductDigitalTwin = () => {
  return (
    <div className="py-[150px]">
      <div className="grid grid-cols-2 gap-4 mx-[80px]">
        <div>
          <img src={digitalTwin} alt="" />
        </div>
        <div className="mt-[20px]">
          <p className="text-white text-[28px] font-poppins font-medium">
            Digital Twin
          </p>
          <p className="text-[#C8C8C8] text-[18px] font-poppins text-justify">
            We built a 3D digital twin of your complete shopfloor, which helps
            you check the functioning even when you aren’t around. Manage your
            manufacturing hub from anywhere around the globe with your
            smartphone on the DFOS mobile application. So, you can visit your
            manufacturing plant anytime with our digital twin.
          </p>
          <Link to="/BlogDetails" className='no-underline'><button className='blogReadButton flex items-center justify-around w-[151px] h-[40px] rounded-[7px] font-inter font-normal text-white'>Read More <img src={readMoreArrow} alt="" /></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDigitalTwin;
