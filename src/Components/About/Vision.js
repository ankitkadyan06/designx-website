import React from 'react'
import split from '../Assets/Images/partGradient.svg'
const Vision = () => {
  return (
    <div className='vision py-[27px] px-[80px]'>
      <div className='flex'>
        <div className='w-[45%]'>
          <p className='text-[32px] text-white font-poppins font-medium'>Our Vision</p>
          <p className='text-[18px] text-[#adadad] font-poppins'>To accelerate transition of manufacturing industry towards digital transformation through DFOS   </p>
        </div>
        <div className='w-[10%]'>
          <img src={split} alt="" />
        </div>
        <div className='w-[45%]'>
          <p className='text-[32px] text-white font-poppins font-medium'>Our Mission</p>
          <p className='text-[18px] text-[#adadad] font-poppins'>To pre-create the manufacturing future with self-serving tech</p>
        </div>
      </div>
    </div>
  )
}

export default Vision
