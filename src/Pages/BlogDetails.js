import React, { useEffect } from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import '../Components/Assets/CSS/BlogDetails.css'
import HeaderBlogDetails from '../Components/Blogs Detail/HeaderBlogDetails'
import DetailsOfBlog from '../Components/Blogs Detail/DetailsOfBlog'
import ScrollToTop from '../Components/Common/ScrollToTop'

const BlogDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='blogDetailsBackground w-full pt-[10px] lg:pt-[77px]'>
      <HeaderDemo/>
      <HeaderBlogDetails/>
      <DetailsOfBlog/>
      <ScrollToTop/>
    </div>
  )
}

export default BlogDetails
