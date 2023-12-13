import React from "react";
import '../Assets/CSS/Product.css'
import globe from '../../globe.mp4'
const ProductHero = () => {
  return (
    <div className="productHero flex">
      <div className="font-poppins mt-[200px] w-[50%]">
        <p className="text-white text-[43px] font-medium ml-[81px]">
          Revolutionize Your Shop floor with DFOS!
        </p>
        <p className="text-[#adadad] text-[18px] ml-[81px] text-justify pr-[55px]">
          DFOS (Digital Factory Operating System) is a SaaS-based DIY platform
          to design, analyse, automate, and measure shop floor processes. It is
          relevant to 2 million+ factories worldwide helping to improvise their
          manufacturing operations. It eliminates human errors and saves time,
          which assists in expanding the business exponentially.
        </p>
      </div>
      <div className="w-[50%]">
      <video autoPlay muted loop className="">
        <source src={globe} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default ProductHero;
