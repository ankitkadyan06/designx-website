import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../Assets/CSS/Timeline.css";
import TimelinePhoto from '../Assets/Images/timelineBack.png'
const TimeLine = () => {
  return (
    <div className="TimeLine border-b-[1px] border-b-solid border-b-black">
      <div className="background">
        <img src={TimelinePhoto} alt="" className="absolute z-[-1] w-full h-full"/>
        <p className="scrollText text-white font-poppins font-medium ml-[20px]">
          Timeline
        </p>

        <Parallax pages={7} config={{ mass: 1, tension: 280, friction: 24 }}>
          <ParallaxLayer sticky={{ start: 0, end: 1 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>Inception: 2015</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                NRV DesignX Pvt. Ltd. was found to provide services related to
                automation and digitization of manufacturing processes.
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 2 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>MVP: 2018</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                Completed our minimum viable product & started with one factory
                of Hindustan Unilever.{" "}
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 2, end: 3 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>Expansion: 2019</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                Expanded to all the factories of HUL in South Asia & added new
                brands like Hero MotoCorp & Bajaj India.{" "}
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 3, end: 4 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>IOT Foray: 2020</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                Added IOT capability & built library of communication protocols
                supporting all the major PLC controller brands. Via DFOS,
                assisted the Manufacturing Companies in maintaining the
                trajectory & not derailing from its path in the Covid pandemic
                times.
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 4, end: 5 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>DFOS Launch: 2021</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                Launched DFOS commercially across 110 factories. Added a couple
                of high-end clients & full-fledged team to support.{" "}
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 5, end: 6 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>The Big Move: 2022</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                Moved to IIT Delhi office in order to boost our Research & Tech
                sophistication
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 6, end: 7 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="card sticky">
                <p>Growing Steadily: 2023</p>
              </div>
              <div className="text-white  font-poppins font-medium text-[20px] px-[15px] py-[5px]">
                Robust team of 70+ handling multifaceted clients & processes
                spread over more than 350 factories.
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default TimeLine;