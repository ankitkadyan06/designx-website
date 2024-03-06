import React from "react";
import avarageTtat from "../Assets/Images/avarageTatt.svg";
import bdReporting from "../Assets/Images/bdReporting.svg";
import esgUseCase from "../Assets/Images/esgUseCases.svg";
import hiraAudit from "../Assets/Images/HiraAudit.svg";
import paperless from "../Assets/Images/paperless.svg";
import preventmain from "../Assets/Images/preventMaintain.svg";
import productionPlanning from "../Assets/Images/productionPlanning.svg";
import OEE from "../Assets/Images/OEE.svg";


const UseCasesData = () => {
  return (
    <div className="w-full p-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.01rem] border-[2px] border-dashed border-[#727272] rounded">
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] sm:border-r-[2px] border-b-[2px]  border-dashed border-[#727272] cursor-pointer">
          <img src={avarageTtat} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            Average TTAT
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] md:border-r-[2px] border-b-[2px]  border-dashed border-[#727272] cursor-pointer">
          <img src={bdReporting} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            BD Reporting
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] sm:border-r-[2px] border-b-[2px] border-dashed border-[#727272]  cursor-pointer">
          <img src={esgUseCase} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            ESG
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] md:border-r-[2px] lg:border-r-[0px] border-b-[2px] border-dashed border-[#727272] cursor-pointer">
          <img src={hiraAudit} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            HIRA_Audit.mp4
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] sm:border-r-[2px] border-b-[2px] lg:border-b-[0px] border-dashed border-[#727272] cursor-pointer">
          <img src={paperless} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            Paperless Audits
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] md:border-r-[2px] border-b-[2px] lg:border-b-[0px] border-dashed border-[#727272] cursor-pointer">
          <img src={preventmain} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            Preventive Maintenance
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] sm:border-r-[2px] border-b-[2px] lg:border-b-[0px] border-dashed border-[#727272] cursor-pointer">
          <img src={productionPlanning} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            Production Planning
          </p>
        </div>
        <div className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] md:border-r-[2px] lg:border-r-[0px] border-dashed border-[#727272] cursor-pointer">
          <img src={OEE} alt="" />
          <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
            Production Monitoring (OEE)
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCasesData;
