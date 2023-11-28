import React from 'react'
import blogPic from '../Assets/Images/blogPic.svg'
const BlogsContent = () => {
  return (
    <div>
      <div className='blogContentBackground grid grid-cols-2 w-[88%] h-[278px] border-[5px] border-solid border-[#0943CB] rounded-[24px] ml-[96px]'>
        <img src={blogPic} alt="" />
        <div className='font-poppins mt-[41px]'>
            <p className='text-white text-[28px] font-medium'>How DFOS empowers intelligent business process management suite(iBPMS)?</p>
            <p className='text-[18px] text-[#adadad]'>Leverage the benefits of Intelligent Business Process Management suite</p>
            <button className='blogReadButton w-[151px] h-[40px] rounded-[7px] font-inter text-white'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default BlogsContent
