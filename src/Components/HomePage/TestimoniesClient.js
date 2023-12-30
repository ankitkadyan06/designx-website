import React from "react";
import Slider from "react-slick";
import '../Assets/CSS/Testimonies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimoniesClient = () => {
  const texts = [
    {
      head: "Vinod Mishra",
      orgName: "HUL-ORAI",
      desc: "DesignX is a team of professionals. They always act fast on any issue/support required and the good part is that they update after the issue is resolved. Best of luck for the DesignX team.",
    },
    {
      head: "Rajeev Thakur",
      orgName: "Unilever India Exports Limited",
      desc: "We have been working with DesignX, from last few years .Thanks to Development & Service team of DesignX for such regular service. It’s good to see that DesignX team makes continuous improvements on the job, post deployment, as per the feedback given.",
    },
    {
      head: "Aakanksha",
      orgName: "Unilever",
      desc: "The team was very supportive and understanding of our needs. They went all out to ensure our standard questionnaire in place. They also provided continuous support for any improvements in the app on an ongoing basis. An overall smooth & satisfying experience!",
    },
    {
      head: "Varun",
      orgName: "Unilever, IT",
      desc: "DesignX has enabled a key SC Collaboration platform for Hindustan Unilever, helping re-imagine the complete process from the perspective of premium user experience and top quality functional experience.",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 700,
  };

  return (
    <div className="testimonies w-full h-[1250px] sm:h-[1200px] lg:h-[1200px] xl:h-[850px] 2xl:h-[900px] px-[80px]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 mt-[50px]">
      <div className="pr-[17px] mt-[5px] sm:mt-[80px] lg:mt-[120px]">
          <p className="text-gradientTest font-poppins text-[32px] lg:text-[42px] font-semibold">
            What Our Clients Are Saying...
          </p>
        </div>
        <div className="relative pt-[80px] pl-[50px] carousel-container">
          <Slider {...settings}>
            {texts.map((text, index) => {
              return (
                <div className="slide" key={index}>
                  <div className="p-[10px] rounded">
                    <p className="text-[#009BF8] font-poppins text-[20px] font-semibold">
                      {text.head}
                    </p>
                    <p className="text-[#A8A8A8] font-poppins text-[16px]">
                      {text.orgName}
                    </p>
                    <p className="text-[#ffffff] font-poppins text-[18px]">
                      {text.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesClient;
