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
                Step into a realm where every line of code tells a story, and
                each solution is a testament to our commitment to pushing
                boundaries. At Zfrozen, we&lsquo;re not just crafting software;
                we&lsquo;re sculpting the future of technology with a touch of
                creativity and a dash of brilliance. Join us on this
                exhilarating journey where professionalism meets passion, and
                where every project is a canvas for innovation. We&lsquo;re more
                than just a software company; we&lsquo;re a collective
                heartbeat, pulsating with purpose. Together, let&lsquo;s explore
                the uncharted territories of technology, where every challenge
                is an opportunity, and every success is a celebration.At
                Zfrozen, it&lsquo;s not just about the lines of code; it&lsquo;s
                about the stories they create. Welcome to a community where
                collaboration, innovation, and a genuine connection define our
                every move. Here, the future is not just imagined – it&lsquo;s
                crafted. Welcome to Zfrozen – where brilliance meets
                boundless possibilities!
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
