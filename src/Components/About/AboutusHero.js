import React from 'react'
import '../Assets/CSS/AboutusHero.css'
import Marquee from 'react-fast-marquee'
import unilever from '../Assets/Images/unilever.svg'
import amber from '../Assets/Images/amber.svg'
import dabur from '../Assets/Images/daber.svg'
import toray from '../Assets/Images/torey.svg'
import hero from '../Assets/Images/hero.svg'
import tvs from '../Assets/Images/tvs.svg'
const AboutusHero = () => {
  return (
    <div className='heroAbout pt-[70px] h-[100%] pb-[50px]'>
      <p className='text-[43px] text-white font-poppins w-[50%] mt-[15%] ml-[50%]'>Pre-create next generation shopfloors</p>
      <p className='mt-[500px] ml-[85px] text-[32px] text-white font-poppins font-medium underline underline-offset-8'>Trusted By</p>
      <Marquee>
        <img src={unilever} alt="" />
        <img src={amber} alt="" className='ml-[170px]' />
        <img src={dabur} alt="" className='ml-[170px]' />
        <img src={toray} alt="" className='ml-[170px]' />
        <img src={hero} alt="" className='ml-[170px]' />
        <img src={tvs} alt="" className='ml-[170px]' />
      </Marquee>
    </div>
  )
}

export default AboutusHero
