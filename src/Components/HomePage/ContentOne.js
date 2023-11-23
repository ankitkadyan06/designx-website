import React from 'react'
import '../Assets/CSS/ContentOne.css'
import dashboard from '../Assets/Images/dashboard.svg'
import spring from '../Assets/Images/backgroundSprings.svg'
const ContentOne = () => {
  return (
    <div className='backContent'>
      <div className='flex pt-[100px]'>
        <div className='w-[50%] pl-[78px] pr-[202px]'>
          <p className='text-white text-[32px] font-poppins capitalize'>Massive volume of manufacturing data is Overlooked </p>
          <p className='text-[#D4D4D4] text-[18px] font-poppins text-justify'>As a result, for most manufacturing decision-makers, the visibility to their day-to-day operations is opaque. Due to lack of historical data, a majority of futuristic decisions are instinct-based than data-based. This results in low productivity, compromised safety and depreciated quality.  </p>
          <p className='text-[#D4D4D4] text-[18px] font-poppins text-justify'>Even the ones who wish to change the status quo, when they look-out for a solution, often they encounter solutions which are expensive and have a high lead time. Despite all the challenges, even if they agree to proceed, they find that the identified solutions are not agile and do not meet the requirement.</p>
        </div>
        <div className='w-[50%]'>
          <img src={dashboard} alt="" />
          <img src={spring} alt="" className='absolute top-[65rem] right-[1px] z-[-1]' />
        </div>
      </div>
    </div>
  )
}

export default ContentOne
