import React from "react";

const One = () => {
  const stars = 5;
  return (
    <div className="bg-white px-8 sm:px-14">
      <div className="grid grid-rows-3 lg:grid-rows-7 max-h-screen pt-5">
        <div className="h-[50rem] row-span-3  lg:row-span-3 ">
          <div className="relative flex justify-center">
            <img
              src="/HELLO.png"
              alt="logo"
              className="top-0 right-0 object-fill mt-3 lg:mt-0 object-bottom h-auto md:h-[15rem] lg:h-[30rem] select-none"
              draggable="false"
            />
            <div className="absolute lg:mt-10 translate-y-0 flex flex-col items-center">
              <img
                src="/hello_button.png"
                alt="logo"
                className="top-0 right-0 object-cover object-center h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[4rem] select-none"
                draggable="false"
              />
              <p className="text-center text-[20px] md:text-[60px] lg:text-[90px] font-[600]">
                We&rsquo;re <span className="text-[#FFD700]">Zfrozen</span>,{" "}
              </p>
              <p className="text-center text-[20px] md:text-[60px] lg:text-[90px] font-[600]">
                Let&rsquo;s talk about your project
              </p>
            </div>
          </div>
        </div>

        <div className="row-span-2 mt-20 lg:row-span-5">
          <div className="relative pt-8 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
              <div className="flex flex-col items-center justify-center text-center md:text-start md:justify-start md:items-start z-40">
                <img
                  src="/double-qute.png"
                  alt="logo"
                  className="top-0 right-0 object-cover object-center h-[1rem] sm:h-[2rem] md:h-[2rem] lg:h-[2rem] select-none"
                  draggable="false"
                />
                <p className=" max-w-[10rem] lg:max-w-52 text-[#171717] font-[400] text-[10px] md:text-[15px] lg:text-[20px] ">
                  Zfrozen&rsquo;s Exceptional product design ensure our website&rsquo;s
                  success. Highly Recommended
                </p>
              </div>
              <div className="flex flex-col mt-6 items-center justify-center md:justify-end md:items-end z-40">
                <span>
                  {Array(stars)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFD700"
                        width="32"
                        height="32"
                        className="inline-block"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </span>
                <h2 className="text-[#171717] font-[700] text-[37px]">
                  2 Years
                </h2>
                <p className="text-[#171717] font-[400] text-[20px]">
                  Experince
                </p>
              </div>
            </div>

            <div className="mx-auto  relative mt-20 sm:mt-38 md:mt-4">
              {/* <p>test</p> */}
              <div className="flex justify-center z-10 translate-y-16 sm:translate-y-10 lg:translate-y-0">
                <div className="absolute z-20 top-0 flex justify-center items-center -translate-y-[7rem] md:-translate-y-[10rem]">
                  <img
                    src="/2833b98c20073c9cea2444f06df775a8.png"
                    alt="test"
                    className="object-cover -mt-6 object-center h-[20rem] md:h-[30rem]"
                  />
                </div>
                <img
                  src="/half circle.png"
                  alt="test"
                  className="top-0 right-0 object-contain mt-6 object-center h-[14rem] md:h-[18rem] lg:h-full -translate-y-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
