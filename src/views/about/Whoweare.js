import React from "react";
import { FaRegClock, FaUsers, FaBriefcase } from "react-icons/fa6";

const Whoweare = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col">
        <div className="h-[48rem] lg:h-[38rem] relative overflow-hidden">
          <img
            src="/fc1a3c66d4b0d86a0f3fa2ab7bb672f0.png"
            alt="hello"
            className="h-full top-0 right-0 object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full px-8 sm:px-14 z-30 mt-20">
            <div className="flex justify-center items-center mb-5">
              <p className="text-white font-[600] text-[60px] text-center">Who we are?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-auto md:px-32">
              <div className="flex justify-center items-center order-2 md:order-1 relative ">
                <div className=" bg-white p-4 rounded-[20px] ">
                  <img
                    src="/2833b98c20073c9cea2444f06df775a8.png"
                    alt="test"
                    className="object-cover object-center h-[7rem] md:h-[14rem] md:w-[14rem]"
                  />
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2 ">
                <div className="flex justify-center md:justify-start">
                  <button className=" text-[#000000] text-[28px] font-[500] px-8 py-2 rounded-[28px] bg-[#FFD700] cursor-pointer hover:bg-[#ffe240]">
                    About Our Company
                  </button>
                </div>
                <div className="mt-12">
                  <p className="text-[#FFFFFF] text-[14px] md:text-[18px] md:font-[500]">
                    &quot;Zfrozen is a dynamic team of graduates from South
                    Eastern University, Sri Lanka, united by a common passion
                    for IT-related projects. Established in October 2022, our
                    journey began as a collective vision to excel in the realm
                    of technology. Rooted in our academic foundation, we have
                    evolved into a dedicated force, committed to delivering
                    innovative and impactful IT solutions. Explore our journey
                    as we continue to push boundaries and shape the future of
                    technology.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full px-8 sm:px-14 relative">
          {/* <div className="absolute top-[-6rem] left-[8rem] w-full h-full px-8 sm:px-14 z-10">
            <h1 className="text-white text-[40px] lg:text-[50px] font-[700]">
              Why <span className="text-[#FFD700]">Hire us</span>?
            </h1>
          </div> */}
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
          <div className="w-[8rem] hidden xl:block h-full z-40 absolute top-0 left-0 bg-gradient-to-b from-[#FFD700] to-[#ffffff]"></div>
          <div className="mt-32 sm:mt-48 md:mx-32 relative">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="flex flex-col text-start ">
                <p className="text-black font-[600] text-[50px] ">our vision</p>
                <span className="text-[#000000] text-[28px] font-[400]">
                  &rdquo;Empowering Innovation, Enriching Lives&rdquo;
                </span>
              </div>
              <div className="realative justify-self-end">
                <div className="xl:absolute top-0 right-0 xl:-translate-y-[3.7rem] max-w-[16rem]">
                  <div className="grid grid-cols-4 gap-4">
                    {[...Array(20)].map((_, index) => (
                      <div key={index} className="p-4">
                        <svg
                          width="16"
                          height="24"
                          viewBox="0 0 16 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="0.5"
                            y1="-0.5"
                            x2="22.0098"
                            y2="-0.5"
                            transform="matrix(0 1 1 0 8.00293 0.980469)"
                            stroke="#1F2232"
                          />
                          <line
                            x1="0.5"
                            y1="-0.5"
                            x2="15.3851"
                            y2="-0.5"
                            transform="matrix(1 -1.23882e-07 -6.1694e-08 -1 0.0605469 12.2354)"
                            stroke="#1F2232"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 mt-10 xl:mt-[12rem] mb-[10rem]">
              <div className="flex justify-center relative">
                <div className="xl:absolute top-0 left-0 xl:-translate-x-24 xl:-translate-y-6 w-full h-full overflow-hidden md:overflow-visible">
                  <div className="overflow-hidden w-[18rem] h-[18rem] lg:w-[26rem] lg:h-[26rem] bg-[#f5e89c] bg-opacity-50 rounded-full flex justify-center items-center">
                    <div className="w-[16rem] h-[16rem] lg:w-[22rem] lg:h-[22rem] bg-[#f5db4c] bg-opacity-50 rounded-full flex justify-center items-center">
                      <div className="w-[14rem] h-[14rem] lg:w-[18rem] lg:h-[18rem] bg-[#FFD700] bg-opacity-50 rounded-full flex justify-center items-center">
                        <img
                          src="/5a739b93aecbdf9410376e2f880a8494.png"
                          alt="hello"
                          className="w-[18rem] lg:w-[29rem] h-[18rem] lg:h-[29rem] object-cover object-center z-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-2 flex justify-end flex-col pl-8">
                <span className="text-[#000000] text-[50px] font-[700] text-right">
                  Our Mission
                </span>
                <p className="text-right mt-2">
                  &rdquo;At Zfrozen, we are committed to revolutionizing the
                  intersection of technology and creativity. Our mission is to
                  empower businesses and individuals through a comprehensive
                  suite of cutting-edge solutions that seamlessly blend
                  creativity, functionality, and efficiency. From
                  state-of-the-art mobile POS systems to visionary web and app
                  development, IoT, AI, ML projects, 3D printing, laser wood
                  printing, and beyond, the Zfrozen team covers all realms of
                  innovation. Our commitment extends to harnessing the power of
                  Facebook marketing, where we leverage the latest strategies to
                  enhance brand visibility and engagement. With a relentless
                  pursuit of excellence, we aim to transform ideas into reality,
                  enriching lives, and leaving a lasting impact on the world. At
                  the heart of our mission is a dedication to our clients&lsquo;
                  success, fueled by collaboration, integrity, and a passion for
                  pushing boundaries in all kinds of works integrated with IT.
                  Join the Zfrozen team on the journey of innovation, and
                  let&lsquo;s shape the future together.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
