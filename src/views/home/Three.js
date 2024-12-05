import React from "react";

const Three = () => {
  return (
    <div className="h-full px-4 mx-auto sm:px-6 lg:px-8 bg-black w-full">
      <div className="xl:px-32">
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-2 my-20">
            <h1 className="text-[45px] lg:text-[60px] font-[700] text-white text-wrap">
              Welcome message
            </h1>
            <div className="mt-16 w-[12rem] md:w-auto lg:w-[40rem]">
              <p className="text-white text-[18px] flex-wrap">
                Welcome to Zfrozen, where innovation meets creativity.
                We&lsquo;re passionate about shaping the future of IT with brilliance and dedication.
                At Zfrozen, every project is a canvas for collaboration and innovation,
                turning challenges into opportunities and ideas into success.
                Let&lsquo;s craft the future together!
              </p>
            </div>
            <h1 className="text-[45px] lg:text-[25px] font-[700] text-white text-wrap mt-16">
              Zfrozen Team
            </h1>
          </div>
          <div className="bg-[#FFD700] relative ">
            <div className=" bg-white p-4 rounded-[20px] absolute top-1/2 -translate-y-1/2 -translate-x-[1rem] md:-translate-x-[4rem]">
              <img
                src="/2833b98c20073c9cea2444f06df775a8.png"
                alt="test"
                className="object-cover object-center h-auto md:h-[12rem]"
              />
            </div>
          </div>

          <img
            src="/texter.png"
            alt="test"
            className="absolute h-[30rem] translate-y-[2rem] translate-x-[50rem]"
          />
        </div>
        {/* <p className="text-white">test</p> */}
      </div>
    </div>
  );
};

export default Three;
