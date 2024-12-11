import React from "react";
// import { FaRegClock, FaUsers, FaBriefcase } from "react-icons/fa6";

const Whoweare = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col">
        <div className="h-[45rem] md:h-[48rem] lg:h-[48rem] xl:h-[40rem] relative overflow-hidden">
          <img
            src="/fc1a3c66d4b0d86a0f3fa2ab7bb672f0.png"
            alt="hello"
            className="h-full top-0 right-0 object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full px-8 sm:px-14 md:px-[2rem] lg:px-[10rem] lx:px-[10rem] z-30 mt-10 md:mt-20 lg:mt-20 xl:mt-20">
            <div className="flex justify-center items-center mb-5">
              <p className="text-white font-[600] text-[30px] md:text-[50px] lg:text-[50px] text-center">Who we are?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 lg:gap-10 xl:gap-2 px-auto md:px-0 md:mt-16">
              <div className="flex justify-center items-center md:justify-start md:items-start order-2 md:order-1 relative ">
                <div className=" bg-white p-4 rounded-[20px] ">
                  <img
                    src="/2833b98c20073c9cea2444f06df775a8.png"
                    alt="test"
                    className="object-cover object-center h-[7rem] md:h-auto lg:h-[12rem] lg:w-[17rem] xl:h-[17rem]"
                  />
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="flex justify-center md:justify-start">
                  <button className="text-[#000000] text-[20px] sm:text-[28px] md:text-[20px] font-[500] px-6 py-2 sm:px-8 sm:py-2 rounded-[28px] bg-[#FFD700] cursor-pointer hover:bg-[#ffe240]">
                    About Our Company
                  </button>
                </div>
                <div className="mt-6 md:mt-6 lg:mt-12 xl:mt-12">
                  <p className="text-[#FFFFFF] text-[14px] md:text-[18px] lg:text-[18px] md:font-[500]">
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
          {/* </div> */}
          <div className="w-[8rem] hidden md:block lg:block xl:block h-full z-40 absolute top-0 left-0 bg-gradient-to-b from-[#FFD700] to-[#ffffff]"></div>
          <div className="mt-32 sm:mt-48 md:mx-32 relative">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="flex flex-col text-start ">
                <p className="text-black font-[600] text-[30px] md:text-[50px] lg:text-[50px] ">Our vision</p>
                <span className="text-[#000000] text-[28px] font-[400]">
                  &rdquo;Empowering Innovation, Enriching Lives&rdquo; <br /> Our vision is to be a leading provider of transformative IT solutions, pushing boundaries and enriching lives through innovation and excellence.
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
                <div className="xl:absolute z-50 top-0 left-10 xl:-translate-x-24 xl:-translate-y-6 w-full h-full overflow-hidden md:overflow-visible">
                  <img
                    src="/about-girl.webp"
                    alt="hello"
                    className="w-[18rem] lg:w-[29rem] h-[18rem] lg:h-[29rem] object-cover object-center "
                  />
                </div>
              </div>
              <div className="xl:col-span-2 flex justify-end flex-col pl-8">
                <span className="text-[#000000] text-[30px] md:text-[50px] lg:text-[50px] font-[700] text-right">
                  Our Mission
                </span>
                <p className="text-right mt-2">
                  &rdquo;At Zfrozen, we are dedicated to delivering innovative and comprehensive IT solutions that empower businesses and individuals to overcome challenges and achieve their goals.
                  From web and app development to IoT, AI, ML projects, 3D printing, CNC milling and engraving, and smart agriculture solutions, we specialize in creating tailored, technology-driven solutions that address diverse needs across industries.
                  Our expertise extends to IT infrastructure design, custom software solutions, data analytics, automation, and advanced technology integration, ensuring our clients remain competitive in an ever-evolving digital landscape.
                  Our mission is to transform ideas into impactful realities, prioritizing creativity, collaboration, and integrity to deliver solutions that make a lasting difference. Together, let’s build the future of IT innovation.&rdquo;
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
