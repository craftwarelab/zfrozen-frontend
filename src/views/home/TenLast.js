import React from "react";

const TenLast = () => {
  return (
    <>
      <div className="bg-black px-4 pb-10 mx-auto sm:px-6 lg:px-8 select-none">
        <div className="xl:px-32">
          <div className="flex flex-col gap-5 rounded-xl justify-center items-center p-5 md:lg:p-12 lg:p-12 bg-[#FFD700]">
            <p className="text-black font-[600] lg:text-[50px] sm:text-[40px] text-[30px] text-center">
              Hey! Let&lsquo;s Talk
            </p>
            <p className="text-center  lg:px-20">
              "Ready to turn your ideas into extraordinary products? At ZFROZEN, we specialize in innovative solutions, from AI-driven systems to IoT applications."
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <button className="w-full sm:w-[180px] h-[50px] text-black bg-white rounded-xl p-2 hover:bg-black hover:text-white">
                Send us a message
              </button>
              <button className="w-full sm:w-[180px] h-[50px] text-black bg-white rounded-xl p-2 hover:bg-black hover:text-white">
                Schedule a call
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TenLast;
