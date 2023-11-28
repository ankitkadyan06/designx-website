import React from 'react'
import Blogback from '../Assets/Images/blogsBack.svg'
const BlogsHeader = () => {
  return (
    <div>
      <div className='w-full blogHeading'>
        <img src={Blogback} alt="" className='w-full' />
        <p className='text-white text-[57px] absolute top-[250px] ml-[96px]'>Blogs</p>
      </div>
    </div>
  )
}

export default BlogsHeader
