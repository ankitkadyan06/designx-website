import React from 'react'
import Blogback from '../Assets/Images/blogDetailHeader.svg'
const BlogsHeader = () => {
  return (
    <div>
      <div className='w-full blogHeading pt-[60px] lg:pt-[0px]'>
        <img src={Blogback} alt="" className='w-full' />
        {/* <p className='text-white text-[16px] sm:text-[24px] lg:text-[30px] md:text-[40px] xl:text-[57px] relative z-[1] top-[80px] md:top-[120px] xl:top-[200px] 2xl:top-[250px] ml-[60px] xl:ml-[96px]'>Blogs</p> */}

      </div>
    </div>
  )
}

export default BlogsHeader
