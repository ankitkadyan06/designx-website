import React from "react";
import wheel from "../Assets/Images/wheel.svg";
const Wheel = () => {
  return (
    <div className="bg-[#01071B] py-[50px] px-[80px]">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={wheel} alt="Wheel" />
        </div>
        <div>
          <div className="border-[7px] border-solid border-[#0B77F8] rounded-[21px] px-[72px] py-[28px] mt-[130px]">
            <p className="text-[43px] text-white font-robotoSlab font-semibold">
              Paper Process
            </p>
            <p className="text-[20px] text-white font-poppins">
              No more information storage costs, no more carbon footprint. Do
              away with bulky files, as by incorporating DFOS at your
              manufacturing unit, you can easily go digital.
            </p>
            <br />
            <br />
            <p className="text-[20px] text-white font-poppins">
              Eliminate unnecessary documents and papers with DFO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
