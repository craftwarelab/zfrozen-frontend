import React from 'react';

function App() {
  return (
    <div className="h-fit bg-black select-none">


      {/* Mobile Layout */}
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 sm:grid-cols-1 gap-4 min-h-fit px-4 mx-auto sm:px-6 lg:px-8">
        {/* Left Column (Top) */}
        <div className="grid grid-rows-3p-4 xl:px-32 my-20">
          <div className="p-4">
            <h1 className="text-[45px] lg:text-[60px] font-[700] text-white text-wrap">
              Welcome message
            </h1>
          </div>
          <div className="p-4">
            <p className="text-white text-[18px] flex-wrap">
              Welcome to Zfrozen, where innovation meets creativity.
              We&lsquo;re passionate about shaping the future of IT with brilliance and dedication.
              At Zfrozen, every project is a canvas for collaboration and innovation,
              turning challenges into opportunities and ideas into success.
              Let&lsquo;s craft the future together!
            </p>
          </div>
          <div className="p-4">
            <h1 className="text-[25px]  lg:text-[25px] font-[700] text-white text-wrap mt-16">
              Zfrozen Team
            </h1>
          </div>
        </div>

        {/* Right Column (Bottom) */}
        <div className=" xl:px-32 ">
          <img
            src="/welcomlogo.png"
            alt="test"
            className=" md:h-[35rem]"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
