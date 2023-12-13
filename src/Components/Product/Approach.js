import React from 'react'
import Cardone from '../Assets/Images/Card1.svg'
import Cardtwo from '../Assets/Images/Card2.svg'
import Cardthree from '../Assets/Images/Card3.svg'
const Approach = () => {
  return (
    <div className='px-[30px] py-[30px]'>
        <div className='grid grid-cols-3 gap-4'>
            <img src={Cardone} alt="" />
            <img src={Cardtwo} alt="" />
            <img src={Cardthree} alt="" />
        </div>
    </div>
  )
}

export default Approach
