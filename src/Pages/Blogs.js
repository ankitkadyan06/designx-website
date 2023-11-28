import React from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import '../Components/Assets/CSS/Blogs.css'
import BlogsHeader from '../Components/Blogs/BlogsHeader'
import BlogsContent from '../Components/Blogs/BlogsContent'

const Blogs = () => {
  return (
    <div className='blogback w-full h-[100vh]'>
        <HeaderDemo/>
        <BlogsHeader/>
        <BlogsContent/>
    </div>
  )
}

export default Blogs
