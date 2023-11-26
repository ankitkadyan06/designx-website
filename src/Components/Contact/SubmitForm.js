import React from "react";

const SubmitForm = () => {
  return (
    <div className="pt-[150px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="w-[365px] ml-[200px]">
          <p className="text-white text-[47px] font-poppins font-semibold">
            One-step closer to digitalization
          </p>
          <p className="text-[#D4D4D4] text-[18px] font-poppins text-justify">
            The quest to find an agile solution for your shop floor has come to
            an end. Switch to digitalization today with DesignX!
          </p>
          <div className="flex">
            <div className="bookDemo w-[168px] h-[202px] cursor-pointer focus:border-[5px] focus:border-solid focus:border-[#0046FF]">
              <p className="contactTextGradient text-[22px] font-poppins font-semibold mt-[20px] ml-[17px] mr-[20px]">
                Book a Demo
              </p>
              <p className="text-[#D4D4D4] text-[12px] font-poppins ml-[17px] mr-[30px]">
                Request a demo of one of our solutions.
              </p>
            </div>
            <div className="bookDemo ml-[40px] w-[168px] h-[202px] cursor-pointer focus:border-[5px] focus:border-solid focus:border-[#0046FF]">
              <p className="text-white text-[22px] font-poppins font-semibold mt-[20px] ml-[17px] mr-[20px]">
                Try Now !
              </p>
              <p className="text-[#D4D4D4] text-[12px] font-poppins ml-[17px] mr-[30px]">
                Sign up for a demo and switch to digitalization.
              </p>
            </div>
          </div>
        </div>
        <div className="formBackground ml-[70px]">
          <div className="w-[50%]">
            <p className="text-white text-[32px] font-poppins font-medium">
              Contact Us
            </p>
            {/* <hr className="border-b-[3px] border-solid border-white w-[15%]" /> */}
            <div className="border-b-[3px] border-solid border-white w-[40%]"></div>
            <form action="" className="mt-[40px]">
              <input
                type="text"
                placeholder="NAME"
                className="text-white text-[12px] font-poppins p-[5px] w-[356px] border-b-[1px] border-solid border-white bg-transparent focus:outline-none"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="mt-[45px] text-white text-[12px] font-poppins p-[5px] w-[356px] border-b-[1px] border-solid border-white bg-transparent focus:outline-none"
              />
              <input
                type="text"
                placeholder="PHONE (OPTIONAL)"
                className="mt-[45px] text-white text-[12px] font-poppins p-[5px] w-[356px] border-b-[1px] border-solid border-white bg-transparent focus:outline-none"
              />
              <input
                type="text"
                placeholder="COMPANY (OPTIONAL)"
                className="mt-[45px] text-white text-[12px] font-poppins p-[5px] w-[356px] border-b-[1px] border-solid border-white bg-transparent focus:outline-none"
              />
              <br />
              <br />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[17px] h-[17px] relative top-[4px]"
              />
              <label
                htmlFor=""
                className="text-[#B7B7B7] text-[12px] font-poppins ml-[6px]"
              >
                Subscribe to our newsletter
              </label>

              <div className="mt-[20px]">
                <p className="text-[12px] text-white font-poppins uppercase">
                  Remark
                </p>
                <textarea
                  name=""
                  id=""
                  placeholder="It would be great to hear more about your project (optional)"
                  className="w-[100%] h-[171px] bg-transparent border-[1px] border-solid border-white rounded-[9px] p-[10px] focus:outline-none"
                ></textarea>
              </div>
            </form>
            <button className="submitButtonForForm w-[121px] h-[42px] text-white text-[18px] font-poppins font-medium mt-[22px] ml-[30%]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
