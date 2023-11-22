import React from 'react'
import Header from '../Components/Common/Header'
import HeroSection from '../Components/HomePage/HeroSection'
import ContentOne from '../Components/HomePage/ContentOne'
import ContentTwo from '../Components/HomePage/ContentTwo'
import TrustedBy from '../Components/HomePage/TrustedBy'
import VideoComp from '../Components/HomePage/VideoComp'
import Testimonies from '../Components/HomePage/Testimonies'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <HeroSection />
      <ContentOne/>
      <ContentTwo/>
      <TrustedBy/>
      <VideoComp/>
      <Testimonies/>
    </div>
  )
}

export default HomePage
