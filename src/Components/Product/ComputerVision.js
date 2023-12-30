import React from 'react'
import { Link } from 'react-router-dom'
import readMoreArrow from '../Assets/Images/readMoreArrow.svg'
import computerVision from '../Assets/Images/computerVision.svg'
const ComputerVision = () => {
  return (
    <div className="tiltBGProduct">
    <div className="IIOT py-[100px] px-[80px]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 pt-[50px] lg:pt-[100px]">
        <div className="px-[10px] lg:px-[78px] overlook">
          <p className="text-white text-[28px] font-poppins font-medium capitalize">Computer Vision</p>
          <p className="text-[#C8C8C8] text-[14px] md:text-[18px] font-poppins text-justify">
          Capture shop floor insights using the algorithms of computer vision to ensure safer operations, eliminate errors & enhance the manufacturing environment safety. Extract meaningful insights using computer vision via DFOS
          </p>
          <Link to="/BlogDetails" className='no-underline'><button className='blogReadButton flex items-center justify-around w-[151px] h-[40px] rounded-[7px] font-inter font-normal text-white'>Read More <img src={readMoreArrow} alt="" /></button></Link>
        </div>
        <div className="checkImage">
            <img src={computerVision} alt="" className="mt-[20px] lg:mt-[0px]"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ComputerVision