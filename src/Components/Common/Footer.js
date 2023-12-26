import React from "react";
import "../Assets/CSS/Footer.css";
import facebook from '../Assets/Images/faceBookIcon.svg'
import linkedin from '../Assets/Images/linkedinIcon.svg'
import logo from '../Assets/Images/designXlogo.svg'
const Footer = () => {
  return (
    <div className="footerBack font-poppins text-white pt-[60px] px-[78px]">
      <div className="grid grid-cols-4">
        <div>
          <div>
            <p className="text-[20px] font-medium">Platform</p>
            <p className="font-light text-[16px]">DFOS</p>
            <p className="font-light text-[16px]">Digital Process</p>
            <p className="font-light text-[16px]">IIOT</p>
            <p className="font-light text-[16px]">Digital Twin</p>
            <p className="font-light text-[16px]">Computer vision</p>
            <p className="font-light text-[16px]">ESG</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[20px] font-medium">Company</p>
            <p className="font-light text-[16px]">About Us</p>
            <p className="font-light text-[16px]">Blogs</p>
            <p className="font-light text-[16px]">Privacy Policy</p>
            <p className="font-light text-[16px]">Case Study</p>
            <p className="font-light text-[16px]">Newsletter</p>
            <p className="font-light text-[16px]">Contact Us</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[20px] font-medium">Contact </p>
            <p className="font-light text-[16px]">Email: info@designx.in</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[20px] font-medium">Location </p>
            <p className="font-light text-[16px]">
              3C-1, Block C, Research & Innovation Park, IIT Delhi, New Delhi
              110016
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="flex">
              <img src={facebook} alt="" className="mr-[32px]" />
              <img src={linkedin} alt="" />
            </p>
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-solid border-white"/>
      <div className="flex justify-between">
      <p className="text-[18px] py-[30px]">Copyright © 2021 NRV Designx Pvt. Ltd.</p>
      <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
