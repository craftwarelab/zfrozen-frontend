import React from "react";
import {
  FaRegClock,
  FaUsers,
  FaBriefcase,
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaCcJcb,
  FaCcAmazonPay,
} from "react-icons/fa6";

const Two = () => {
  const companyIcons = [
    <FaCcVisa key="visa" className="text-[55px]" />,
    <FaCcPaypal key="paypal" className="text-[55px]" />,
    <FaCcMastercard key="mastercard" className="text-[55px]" />,
    <FaCcJcb key="jcb" className="text-[55px]" />,
    <FaCcAmazonPay key="amazon" className="text-[55px]" />,
  ];
  return (
    <div className="h-full select-none">
      <div className="grid grid-rows-2 ">
        <div className="h-full sm:h-[34rem] lg:h-[30rem] relative overflow-hidden">
          <img
            src="/fc1a3c66d4b0d86a0f3fa2ab7bb672f0.png"
            alt="hello"
            className="h-full top-0 right-0 object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full px-4 mx-auto sm:px-6 lg:px-8 z-30 mt-12">
            <div className="px-auto xl:px-32">
              <div className="flex justify-center items-center sm:justify-start">
                <button className=" text-[#000000] text-[28px] font-[500] px-8 py-2 rounded-[28px] bg-[#FFD700] cursor-pointer hover:bg-[#ffe240]">
                  About Our Company
                </button>
              </div>
              <div className="mt-12">
                <p className="text-[#FFFFFF] text-[18px] font-[500] text-center sm:text-start">
                  &quot;Zfrozen is a dynamic team of graduates from South
                  Eastern University, Sri Lanka, united by a common passion for
                  IT-related projects. Established in October 2022, our journey
                  began as a collective vision to excel in the realm of
                  technology. Rooted in our academic foundation, we have evolved
                  into a dedicated force, committed to delivering innovative and
                  impactful IT solutions. Explore our journey as we continue to
                  push boundaries and shape the future of technology.&quot;
                </p>
              </div>
              <div className="mt-[2.8rem] sm:mt-[1.8rem] md:mt-[2rem] lg:mt-28">
                <h1 className="text-white text-center sm:text-start text-[40px] lg:text-[50px] font-[700]">
                  Why <span className="text-[#FFD700]">Hire us</span>?
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full px-8 sm:px-14 relative">
          {/* <div className="relative"> */}
            <div className="absolute top-0 left-0 -translate-y-[3.7rem] w-full h-full flex flex-col items-center md:items-end md:px-32">
              <div className="p-5 md:p-10 bg-[#FFD700] rounded-[20px]">
                <div className="flex flex-row gap-6 justify-between items-center font-[600]">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <span>
                      <FaRegClock className="text-[28px] font-[700]" />
                    </span>
                    <p className="font-[700]">10+</p>
                    <p className="text-[8px] md:text-[12px] font-[600]">
                      Completed Project
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2">
                    <span>
                      <FaUsers className="text-[28px] font-[700]" />
                    </span>
                    <p className="font-[700]">5+</p>
                    <p className="text-[8px] md:text-[12px] font-[600]">
                      Happy Customers
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2">
                    <span>
                      <FaBriefcase className="text-[28px] font-[700]" />
                    </span>
                    <p className="font-[700]">1+</p>
                    <p className="text-[8px] md:text-[12px] font-[600]">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}

          <div className="mt-32 sm:mt-48 md:mx-32">
            <div className="flex justify-center items-center my-10">
              <p className="text-[40px] font-[600] text-center">
                Amazing clients who trust us
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 sm:gap-16 py-6 overflow-x-auto ">
              {companyIcons.map((item, key) => (
                <span className="icon" key={key}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Two;
