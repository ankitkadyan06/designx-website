import React from 'react'
import blogPic from '../Assets/Images/blogPic.svg'
import { Link } from 'react-router-dom';
const BlogsContent = () => {
  return (
    <div>
      <div className='blogContentBackground lg:grid lg:grid-cols-2 w-[88%] h-[450px] lg:h-[278px] border-[5px] border-solid border-[#0943CB] rounded-[24px] ml-[20px] sm:ml-[50px] lg:ml-[96px]'>
        <img src={blogPic} alt="" className='rounded-24px' />
        <div className='font-poppins mt-[0px] lg:mt-[41px] ml-[10px]'>
            <p className='text-white text-[24px] xl:text-[28px] font-medium'>How DFOS empowers intelligent business process management suite(iBPMS)?</p>
            <p className='text-[14px] xl:text-[18px] text-[#adadad] font-medium'>Leverage the benefits of Intelligent Business Process Management suite</p>
            <Link to="/BlogDetails"><button className='blogReadButton w-[151px] h-[40px] rounded-[7px] font-inter text-white'>Read More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default BlogsContent