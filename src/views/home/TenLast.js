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
            <p className="text-center lg:px-20">
              "Ready to turn your ideas into extraordinary products? We specialize in transforming concepts into innovative solutions that make an impact."
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <a 
                href="https://wa.me/94771173022?text=Hi%20there%2C%20I%20would%20like%20to%20discuss%20my%20project."
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-[180px] h-[50px] text-black bg-white rounded-xl p-2 hover:bg-black hover:text-white">
                  Send us a message
                </button>
              </a>
              <a 
                href="https://wa.me/94771173022"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-[180px] h-[50px] text-black bg-white rounded-xl p-2 hover:bg-black hover:text-white">
                  Schedule a call
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenLast;
