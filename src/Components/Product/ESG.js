import React from "react";
import esg from '../Assets/Images/ESG.svg'
import readMoreArrow from '../Assets/Images/readMoreArrow.svg'
import { Link } from 'react-router-dom'
const ESG = () => {
  return (
    <div className="py-[150px]">
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 mx-[80px]">
        <div>
            <img src={esg} alt="" />
        </div>
        <div>
            <p className="text-white text-[28px] font-poppins font-medium">ESG</p>
            <p className="text-[#C8C8C8] text-[18px] font-poppins text-justify">Enhance long-term sustainability, attract responsible investors, and contribute positively to society and the planet by embracing environment social governance principles with DFOS. ESG is a sound business strategy that aligns financial success with societal and environmental well-being. </p>
            <Link to="/BlogDetails" className='no-underline'><button className='blogReadButton flex items-center justify-around w-[151px] h-[40px] rounded-[7px] font-inter font-normal text-white'>Read More <img src={readMoreArrow} alt="" /></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ESG;