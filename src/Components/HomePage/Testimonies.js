import React from 'react'
import '../Assets/CSS/Testimonies.css'
import prevArrow from '../Assets/Images/PreviousArrow.svg'
import nextArrow from '../Assets/Images/nextArrow.svg'

const Testimonies = () => {
  return (
    <div className='testimonies h-[700px]'>
      <div className='flex pt-[200px] pl-[78px]'>
        <div className='w-[30%] pr-[17px]'>
       <p className='text-gradientTest font-poppins text-[42px] font-semibold'> What Our Clients Are Saying...</p>
       <div className='flex'>
        <img src={prevArrow} alt="" className='w-[78px]' />
        <img src={nextArrow} alt="" className='w-[78px] ml-[32px]'/>
       </div>
        </div>
        <div className='w-[70%]'>ABCD</div>
      </div>
    </div>
  )
}

export default Testimonies
