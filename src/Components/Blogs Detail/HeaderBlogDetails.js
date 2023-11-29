import React from 'react'
// import headerblogDetails from '../Assets/Images/headerBlogdetails.svg';
import headerBlockPic from '../Assets/Images/blogDetailspic.svg'
const HeaderBlogDetails = () => {
  return (
    <div className='blogHeaderBack'>
      {/* <img src={headerblogDetails} alt="" className='absolute top-0 w-full' /> */}
      <div className='block lg:grid lg:grid-cols-2 gap-4 relative z-[1]'>
        <div className='pl-[50px] lg:pl-[100px] pr-[50px]'>
            <p className='text-white text-[14px] lg:text-[18px] font-inter mt-[31px] font-medium'>Home/ Blog</p>
            <p className='text-white text-[28px] sm:text-[32px] lg:text-[42px] font-robotoSlab'>How DFOS empowers intelligent business process management suite(iBPMS)?</p>
            <p className='text-[14px] lg:text-[18px] text-white font-poppins font-medium'>Leverage the benefits of Intelligent Business Process Management suite</p>
        </div>
        <div className='hidden lg:flex lg:justify-end'>
            <img src={headerBlockPic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeaderBlogDetails
