import React from 'react'
import checkImage from '../Assets/Images/checkAbout.svg'
import spring from '../Assets/Images/backgroundSprings.svg'
const AboutContent = () => {
  return (
    <div className='aboutContent pb-[60px]'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='ml-[80px] mt-[150px] mr-[142px] text-justify'>
            <p className='text-[32px] text-white font-poppins font-medium'>Bring the revolutionary change to shop floors </p>
            <p className='text-[18px] text-[#adadad] font-poppins'>Without a functional plan, managing shop floors is like solving Chinese arithmetic equations. Not exaggerating, but from equipment breaks to human errors; mistakes & slipups keep arising, and hence it becomes more challenging to manage manually by the workforce. </p>
            <p className='text-[18px] text-[#adadad] font-poppins'>But with DesignX as your digital partner, you can light a fire & bring a revolutionary change to your shop floor. Automate your manufacturing hub and mark your beginning in pre-creating the future. Adopt the latest optimization strategies with an ultra-modern platform - DFOS (Digital Factory Operating System). </p>
        </div>
        <div>
            <img src={checkImage} alt="" />
            <img src={spring} alt="" className='absolute top-0 right-0 z-[-1]' />
        </div>
        <div></div>
        <div className='mr-[121px] text-justify'>
            <p className='text-[32px] text-white font-poppins font-medium'>Switch to Smart Shopfloors with DFOS</p>
            <p className='text-[18px] text-[#adadad] font-poppins'>DFOS is built to help you switch to the next generation of shop floors. It is a powerful combination of iBPM, RPA, IIOT, and AI. With our platform, you can entirely automate your shop floor and solve every complex problem.</p>
            <p className='text-[18px] text-[#adadad] font-poppins'>We understand that digitization is not a one-size-fits-all solution. Every organization has some unique needs and challenges, and DFOS strives to understand those needs and creates tailored solutions that fit perfectly.</p>
            <p className='text-[18px] text-[#adadad] font-poppins'>So, take the plunge to step into smart manufacturing.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
