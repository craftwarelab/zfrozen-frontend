import React from "react";

const TenLast = () => {
  return (
    <>
      <div className="bg-black px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="xl:px-32">
          <div className="flex flex-col gap-5 rounded-xl justify-center items-center p-12 bg-[#FFD700]">
            <p className="text-black font-[600] text-[42px] text-center">
              Hey! Let&lsquo;s Talk
            </p>
            <p className="text-center  lg:px-20">
              Whether you need a MVP or extra bandwidth, every engagement starts
              with a discovery call.Connect with one of our specialists at a
              time that&lsquo;s convenient to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <button className="w-full sm:w-[180px] h-[50px] text-black bg-white rounded-xl p-2">
                Send us a message
              </button>
              <button className="w-full sm:w-[180px] h-[50px] text-black bg-white rounded-xl p-2">
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
