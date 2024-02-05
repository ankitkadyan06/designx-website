import React, { useEffect } from 'react'
import Cardone from '../Assets/Images/Card1.png'
import Cardtwo from '../Assets/Images/Card2.png'
import Cardthree from '../Assets/Images/Card3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Approach = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" className='px-[15px] lg:px-[30px] py-[30px] Approach'>
      <p className='text-white text-[22px] sm:text-[36px] lg:text-[46px] font-poppins font-medium underline underline-offset-8 sm:underline-offset-[16px] decoration-[#0088FF] pl-[15px] sm:pl-[52px] tracking-wide'>Our Approach</p>
        <div className='flex flex-col items-center lg:grid lg:grid-cols-3 gap-4 justify-between mt-[30px] sm:mt-[70px] mx-[40px] sm:mx-[60px] lg:mx-[80px]'>
            <img src={Cardone} alt="" className='w-[400px]' />
            <img src={Cardtwo} alt="" className='w-[400px]' />
            <img src={Cardthree} alt="" className='w-[400px]' />
        </div>
    </div>
  )
}

export default Approach
