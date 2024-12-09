import React from "react";

const One = () => {
  const stars = 5;
  return (
    <div className="bg-white px-8 sm:px-14">
      <div className="grid grid-rows-2 lg:grid-rows-2 lg:h-[65rem] md:h-[29rem] h-[15rem] pt-5">

        <div className=" row-span-3  lg:row-span-3 ">
          <div className="relative flex justify-center">
            <img
              src="/HELLO.png"
              alt="logo"
              className="object-contain mt-3 lg:mt-0 object-bottom h-auto md:h-[15rem] lg:h-[30rem] select-none"
              draggable="false"
            />
            <div className="absolute lg:mt-10 translate-y-0 flex flex-col items-center">
              <img
                src="/hello_button.png"
                alt="logo"
                className="top-0 right-0 object-cover object-center h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[4rem] select-none"
                draggable="false"
              />
              <p className="text-center text-[24px] md:text-[50px] lg:text-[90px] font-[600]">
                We&rsquo;re <span className="text-[#FFD700]">Zfrozen</span>,{" "}
              </p>
              <p className="text-center text-[24px] md:text-[50px] lg:text-[90px] font-[600]">  
                Let&rsquo;s talk about your project
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-[7rem] md:pt-[15rem]">
          {/* 1st Column - 1/4 of the main div */}
          <div className="grid grid-rows-2 gap-4 items-center justify-start col-span-1">
            <div className="p-4">
              <img
                src="/double-qute.png"
                alt="logo"
                className="top-0 right-0 object-cover object-center h-[1rem] sm:h-[2rem] md:h-[2rem] lg:h-[2rem] select-none"
                draggable="false"
              />
              <p className="max-w-[10rem] lg:max-w-52 text-[#171717] font-[400] text-[10px] md:text-[15px] lg:text-[20px]">
                Zfrozen&rsquo;s Exceptional product design ensures our website&rsquo;s
                success. Highly Recommended
              </p>
            </div>
            <div className="p-4"></div>
          </div>

          {/* 2nd Column - 2/4 of the main div */}
          <div className="flex items-center justify-center p-4 col-span-2">
            <img
              src="/logo-with-shape.webp"
              alt="test"
              className="object-cover object-center h-[8rem] md:h-[14rem] lg:h-[30rem]"
            />
          </div>

          {/* 3rd Column - 1/4 of the main div */}
          <div className="grid grid-rows-3 gap-4 items-center justify-end col-span-1">
            <div className="p-4">
              <span>
                {Array(stars)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      className="inline-block w-4 md:w-6"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </span>
              <h2 className="text-[#171717] font-[700] text-[20px] md:text-[35px]">2 Years</h2>
              <p className="text-[#171717] font-[400] text-[15  px]">Experience</p>
            </div>
            <div className="p-4"></div>
            <div className="p-4"></div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default One;
