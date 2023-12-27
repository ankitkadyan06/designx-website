import React from 'react'
import '../Assets/CSS/TrustedBy.css'
import client from '../Assets/Images/clientLogos.svg'
import { Link } from 'react-router-dom'

const TrustedBy = () => {
  return (
    <div className='trustedBy'>
      <div className='block lg:grid lg:grid-cols-2 gap-4 pt-[50px] lg:pt-[100px] pb-[20px]'>
        <div className='px-[10px] lg:px-[78px]'>
            <img src={client} alt="" />
        </div>
        <div className='px-[10px] lg:px-[78px]'>
            <p className='text-gradientTrust text-[28px] md:text-[38px] font-poppins'>Trusted by</p>
            <hr className='w-[20%] border-[3px] border-solid border-[#0049FF] relative bottom-[17px]'/>
            <p className='text-[28px] lg:text-[32px] text-white font-poppins font-medium'>Leverage the Future of Shop Floor Transformation</p>
            <p className='text-[14px] md:text-[18px] text-white font-poppins'>Some of the significant members of the manufacturing industry have transformed their shop floors by leveraging the SaaS-based platform, DFOS and exhibited exemplary digital outcomes.</p>
            <p className='text-[14px] md:text-[18px] text-white font-poppins'>Empower your shop floors with DFOS.</p>
           <Link to='/Contact'><button className="bg-white text-[#001141] text-[18px] p-[10px] rounded-[5px] font-poppins font-medium">Learn More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy
