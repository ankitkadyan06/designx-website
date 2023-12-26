import React from 'react'
import digitalProcess from '../Assets/Images/digitalProcess.svg'

const ProductContent = () => {
  return (
    <div className='contentProduct py-[100px]'>
      <div className='grid grid-cols-2 gap-4 mx-[80px]'>
        <div>
            <img src={digitalProcess} alt="" />
        </div>
        <div className='mt-[50px] ml-[30px]'>
            <p className='text-[28px] text-white font-poppins font-medium'>Digital Process</p>
            <p className='text-[18px] text-[#C8C8C8] font-poppins text-justify'>No more information storage costs, as by incorporating DFOS at your manufacturing unit, you can easily go paperless. Keeping virtual records amplifies your productivity, minimises the chances of data loss and human errors, and reduces costs.</p>
            <p className='text-[18px] text-[#C8C8C8] font-poppins text-justify'>Focusing on the KPIs becomes easier as one can eliminate unnecessary documents and papers. In addition, there is a huge impact on carbon footprints</p> 
        </div>
      </div>
    </div>
  )
}

export default ProductContent
