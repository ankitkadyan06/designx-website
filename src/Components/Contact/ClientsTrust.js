import React from 'react'
import unilever from '../Assets/Images/unilever.svg'
import amber from '../Assets/Images/amber.svg'
import dabur from '../Assets/Images/daber.svg'
import toray from '../Assets/Images/torey.svg'
import hero from '../Assets/Images/hero.svg'
import tvs from '../Assets/Images/tvs.svg'

const ClientsTrust = () => {
  return (
    <div className='ml-[200px]'>
      <div>
        <p className='text-[20px] text-white font-poppins font-medium' >Trusted by</p>
        <div className="border-b-[3px] border-solid border-white w-[19%]"></div>
        <div className='flex'>
            <img src={unilever} alt="" />
            <img src={amber} alt="" className='ml-[80px]' />
            <img src={dabur} alt="" className='ml-[75px]' />
            <img src={toray} alt="" className='ml-[75px]'/>
            <img src={hero} alt="" className='ml-[100px]'/>
            <img src={tvs} alt="" className='ml-[85px]'/>
        </div>
      </div>
    </div>
  )
}

export default ClientsTrust
