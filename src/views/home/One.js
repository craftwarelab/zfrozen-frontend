import React from "react";

const One = () => {
  const stars = 5;
  return (
    <div className="bg-white px-8 sm:px-14 select-none">
      <div className="grid grid-rows-3 lg:grid-rows-7 max-h-screen pt-5">
        <div className="h-full row-span-1 lg:row-span-3 overflow-hidden">
          <div className="relative flex justify-center max-h-[200px]">
            {/* <p
              className=" text-black opacity-5 font-extrabold text-[100px] sm:text-[80px] md:text-[130px] lg:text-[140px] tracking-[0.1em] sm:tracking-[1em] text-center select-none"
              style={{ transform: "scaleY(1.5)" }}
            >
            thi 

            
              HELLO
            </p> */}
            <img
              src="/HELLO.png"
              alt="logo"
              className="top-0 right-0 object-cover object-center h-[0rem] sm:h-[12rem] md:h-[15rem] lg:h-[30rem] select-none"
              draggable="false"
            />
            <div className="absolute mt-10 translate-y-0 flex flex-col items-center">
              <img
                src="/hello_button.png"
                alt="logo"
                className="top-0 right-0 object-cover object-center h-[0rem] sm:h-[3rem] md:h-[4rem] lg:h-[4rem] select-none"
                draggable="false"
              />
              <p className="text-center text-[45px] sm:text-[50px] md:text-[60px] lg:text-[100px] font-[600]">
                We&rsquo;re <span className="text-[#FFD700]">Zfrozen</span>,{" "}
              </p>
              <p className="text-center text-[45px] sm:text-[50px] md:text-[60px] lg:text-[100px] font-[600]">
                Let&rsquo;s talk about your project
              </p>
            </div>
          </div>
        </div>

        <div className="row-span-2 lg:row-span-4 overflow-hidden">
          <div className="relative pt-8 overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-32">
              <div className="flex flex-col items-center justify-center text-center md:text-start md:justify-start md:items-start z-40">
                <img
                  src="/double-qute.png"
                  alt="logo"
                  className="top-0 right-0 object-cover object-center h-[0rem] sm:h-[2rem] md:h-[2rem] lg:h-[2rem] select-none"
                  draggable="false"
                />
                <p className=" max-w-[10rem] lg:max-w-52 text-[#171717] font-[400] text-[20px]">
                  Zfrozen&rsquo;s Exceptional product design ensure our website&rsquo;s
                  success. Highly Recommended
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:justify-end md:items-end z-40">
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

            <div className="mx-auto md:w-2/3 relative mt-44 sm:mt-38 md:mt-4">
              {/* <p>test</p> */}
              <div className="flex justify-center z-10 translate-y-16 sm:translate-y-10 lg:translate-y-0">
                <div className="absolute z-20 top-0 flex justify-center items-center -translate-y-[7rem] md:-translate-y-[10rem]">
                  <img
                    src="/2833b98c20073c9cea2444f06df775a8.png"
                    alt="test"
                    className="object-cover object-center h-[20rem] md:h-[30rem]"
                  />
                </div>
                <img
                  src="/half circle.png"
                  alt="test"
                  className="top-0 right-0 object-cover object-center h-[14rem] md:h-[18rem] lg:h-full -translate-y-10"
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
