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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <h1 className="text-[45px] lg:text-[60px] font-[700] text-white text-wrap mt-16">
              Zfrozen Team
            </h1>
          </div>
          <div className="bg-[#FFD700] relative">
            <div className=" bg-white p-4 rounded-[20px] absolute top-1/2 -translate-y-1/2 -translate-x-[2rem] md:-translate-x-[4rem]">
              <img
                src="/2833b98c20073c9cea2444f06df775a8.png"
                alt="test"
                className="object-cover object-center h-auto md:h-[12rem]"
              />
            </div>
          </div>
        </div>
        {/* <p className="text-white">test</p> */}
      </div>
    </div>
  );
};

export default Three;
