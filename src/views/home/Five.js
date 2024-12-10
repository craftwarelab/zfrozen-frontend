import React from "react";

const Five = () => {
  return (
    <div className="px-4 py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center mb-12">
        <p className="text-black font-[600] text-[40px] sm:text-[50px]">Our Process</p>
      </div>
      <div>
        {/* Flexbox with responsive grid for mobile and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 ls:gap-8 lx:gap-8  mx-auto md:p-[50px] lg:px-32">

          {/* Research */}
          <div className="bg-[#FFD700] p-6 w-full max-w-[400px] min-h-[320px] h-auto rounded-[25px] shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-black rounded-[25px] text-white">
                <img
                  src="/research-icon.png"
                  alt="Research"
                  className="h-[4rem] sm:h-[5rem] mx-auto"
                  draggable="false"
                />
              </div>
              <div className="text-gray-500 font-bold text-xl sm:text-3xl">01</div>
            </div>
            <h3 className="text-xl font-bold mt-5 text-black">Research</h3>
            <div className="flex items-center justify-between w-[5rem] sm:w-[6rem] my-4">
              <hr className="w-[70%] border-2 border-black bg-black h-[5px] rounded-lg" />
              <hr className="w-[20%] border-2 border-black bg-black h-[5px] rounded-lg" />
            </div>
            <p className="text-black text-sm sm:text-base">
              Delve into in-depth analysis and exploration to identify opportunities and solutions that shape the foundation of your projects.
            </p>
          </div>

          {/* Design */}
          <div className="bg-[#FFD700] p-6 w-full max-w-[400px] min-h-[320px] h-auto rounded-[25px] shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-black rounded-[25px] text-white">
                <img
                  src="/design-icon.png"
                  alt="Design"
                  className="h-[4rem] sm:h-[5rem] mx-auto"
                  draggable="false"
                />
              </div>
              <div className="text-gray-500 font-bold text-xl sm:text-3xl">02</div>
            </div>
            <h3 className="text-xl font-bold mt-5 text-black">Design</h3>
            <div className="flex items-center justify-between w-[5rem] sm:w-[6rem] my-4">
              <hr className="w-[70%] border-2 border-black bg-black h-[5px] rounded-lg" />
              <hr className="w-[20%] border-2 border-black bg-black h-[5px] rounded-lg" />
            </div>
            <p className="text-black text-sm sm:text-base">
              Transform ideas into innovative, user-centric designs, ensuring a seamless and functional experience for every interaction.
            </p>
          </div>

          {/* Develop */}
          <div className="bg-[#FFD700] p-6 w-full max-w-[400px] min-h-[320px] h-auto rounded-[25px] shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-black rounded-[25px] text-white">
                <img
                  src="/development-icon.png"
                  alt="Develop"
                  className="h-[4rem] sm:h-[5rem] mx-auto"
                  draggable="false"
                />
              </div>
              <div className="text-gray-500 font-bold text-xl sm:text-3xl">03</div>
            </div>
            <h3 className="text-xl font-bold mt-5 text-black">Develop</h3>
            <div className="flex items-center justify-between w-[5rem] sm:w-[6rem] my-4">
              <hr className="w-[70%] border-2 border-black bg-black h-[5px] rounded-lg" />
              <hr className="w-[20%] border-2 border-black bg-black h-[5px] rounded-lg" />
            </div>
            <p className="text-black text-sm sm:text-base">
              Bring your vision to life with cutting-edge technology and robust development practices, delivering high-performance solutions.
            </p>
          </div>

          {/* Test */}
          <div className="bg-[#FFD700] p-6 w-full max-w-[400px] min-h-[320px] h-auto rounded-[25px] shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-black rounded-[25px] text-white">
                <img
                  src="/test-icon.png"
                  alt="Test"
                  className="h-[4rem] sm:h-[5rem] mx-auto"
                  draggable="false"
                />
              </div>
              <div className="text-gray-500 font-bold text-xl sm:text-3xl">04</div>
            </div>
            <h3 className="text-xl font-bold mt-5 text-black">Test</h3>
            <div className="flex items-center justify-between w-[5rem] sm:w-[6rem] my-4">
              <hr className="w-[70%] border-2 border-black bg-black h-[5px] rounded-lg" />
              <hr className="w-[20%] border-2 border-black bg-black h-[5px] rounded-lg" />
            </div>
            <p className="text-black text-sm sm:text-base">
              Ensure quality, reliability, and excellence through rigorous testing and validation, ensuring that every product meets the highest standards.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Five;
