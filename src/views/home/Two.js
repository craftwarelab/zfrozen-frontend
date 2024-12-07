import React from "react";

const Two = () => {
  return (
    <div className="select-none h-[80rem] translate-y-[28rem] md:translate-y-[8rem] lg:translate-y-[18rem]">
      <div className="grid grid-rows-2">
        {/* First Section */}
        <div className="h-[33rem] sm:h-[38rem] lg:h-[30rem] relative overflow-hidden">
          <img
            src="/fc1a3c66d4b0d86a0f3fa2ab7bb672f0.png"
            alt="hello"
            className="h-full w-full top-0 right-0 object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full px-4 mx-auto sm:px-6 lg:px-8 z-30 mt-12">
            <div className="px-auto xl:px-32">
              {/* About Our Company Button */}
              <div className="flex justify-center items-center sm:justify-start">
                <button className="text-[#000000] text-[20px] sm:text-[28px] font-[500] px-6 py-2 sm:px-8 sm:py-2 rounded-[28px] bg-[#FFD700] cursor-pointer hover:bg-[#ffe240]">
                  About Our Company
                </button>
              </div>
              {/* Company Description */}
              <div className="mt-8 sm:mt-12">
                <p className="text-[#FFFFFF] text-[14px] sm:text-[18px] font-[500] text-center sm:text-start leading-relaxed">
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
              {/* Why Hire Us */}
              <div className="mt-8 sm:mt-16">
                <h1 className="text-white text-center sm:text-start text-[28px] sm:text-[40px] lg:text-[50px] font-[700]">
                  Why <span className="text-[#FFD700]">Hire us</span>?
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="h-full px-4 sm:px-14 relative">
          {/* Card Section */}
          <div className="absolute top-0 left-0 -translate-y-[6rem] sm:-translate-y-[8.7rem] w-full h-full flex flex-col items-center sm:items-end sm:px-10 md:px-32">
            <div className="p-4 sm:p-10 bg-[#FFD700] rounded-[20px] w-[90%] sm:w-auto">
              <div className="flex flex-row gap-4 sm:gap-6 justify-between items-center font-[600]">
                {/* Completed Projects */}
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src="/completed-project.png"
                    alt="test"
                    className="h-[2rem] sm:h-[4rem] lg:h-[3rem]"
                  />
                  <p className="font-[700] text-[16px] sm:text-[20px]">35+</p>
                  <p className="text-[10px] sm:text-[12px] font-[600] text-center">
                    Completed Projects
                  </p>
                </div>

                {/* Happy Customers */}
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src="/happy-customers.png"
                    alt="test"
                    className="h-[2rem] sm:h-[4rem] lg:h-[3rem]"
                  />
                  <p className="font-[700] text-[16px] sm:text-[20px]">25+</p>
                  <p className="text-[10px] sm:text-[12px] font-[600] text-center">
                    Happy Customers
                  </p>
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src="/years-of-experience.png"
                    alt="test"
                    className="h-[2rem] sm:h-[4rem] lg:h-[3rem]"
                  />
                  <p className="font-[700] text-[16px] sm:text-[20px]">2+</p>
                  <p className="text-[10px] sm:text-[12px] font-[600] text-center">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="mt-20 sm:mt-32 md:mx-32">
            <div className="flex justify-center items-center my-8">
              <p className="text-[24px] sm:text-[40px] font-[600] text-center">
                Amazing clients who trust us
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 sm:gap-16 py-6 overflow-x-auto">
              <img
                src="/evc-logo-white.png"
                alt="logo"
                className="h-[4rem] sm:h-[6rem] md:h-[8rem] lg:h-[10rem] select-none"
                draggable="false"
              />
              <img
                src="/apple-center-logo-white.png"
                alt="logo"
                className="h-[4rem] sm:h-[6rem] md:h-[8rem] lg:h-[10rem] select-none"
                draggable="false"
              />
            </div>
          </div>

        </div>
        {/* Second Section */}
        <div className="h-full px-4 sm:px-14 relative">

        </div>
      </div>
    </div>
  );
};

export default Two;
