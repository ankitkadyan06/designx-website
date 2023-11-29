import React from 'react'
import Blogback from '../Assets/Images/blogsBack.svg'
const BlogsHeader = () => {
  return (
    <div>
      <div className='w-full blogHeading'>
        <img src={Blogback} alt="" className='w-full' />
        <p className='text-white text-[30px] md:text-[40px] xl:text-[57px] absolute top-[80px] md:top-[120px] xl:top-[200px] 2xl:top-[250px] ml-[60px] xl:ml-[96px]'>Blogs</p>
      </div>
    </div>
  )
}

export default BlogsHeader
