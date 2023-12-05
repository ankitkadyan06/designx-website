import React from "react";
import HeaderDemo from "./../Components/Common/HeaderDemo";
import AboutusHero from "../Components/About/AboutusHero";
import AboutContent from "../Components/About/AboutContent";
import Vision from "../Components/About/Vision";
import Founders from "../Components/About/Founders";
import TimeLine from "../Components/About/TimeLine";

const About = () => {
  return (
    <div>
      <HeaderDemo />
      <AboutusHero />
      <AboutContent />
      <Vision />
      <Founders />
      <TimeLine/>
    </div>
  );
};

export default About;
