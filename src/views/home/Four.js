import React,{useState, useEffect} from "react";
import Slider from "react-slick";
import weDo from "./weDo.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Custom.css";

const fetchTechnologies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weDo);
    }, 2000);
  });
};
const Four = () => {
  const [designData, setDesignData] = useState([]);
  useEffect(() => {
    fetchTechnologies().then((data) => {
      setDesignData(data);
    });
  }, []);
  const settings = {
    className: "center",
    dots: true,
    // fade: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 2800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="bg-[#1F2232] px-8 sm:px-14 py-20">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">What we do?</p>
      </div>

      <div className="slider-container md:px-32 mt-5">
        <Slider {...settings}>
          {designData.map((item) => (
            <div className="p-5" key={item.id}>
              <div className="p-0 w-[20rem] h-[25rem] bg-[#000000] rounded-[25px] relative overflow-hidden">
                <div className="p-5">
                  <p className="text-white text-[24px] font-[400]">
                    {item.title}
                  </p>
                </div>
                <hr className="w-full h-[0.5rem] opacity-50" />
                <div className="mt-[3rem] relative">
                  {/* Background divs */}
                  <div className="w-[16rem] h-[16.5rem] bg-[#737373] opacity-45 rounded-[25px] z-10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[30px]"></div>
                  <div className="w-[18rem] h-[16.5rem] bg-[#737373] rounded-[25px] z-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15px]"></div>
                  {/* Foreground div with dynamic background image */}
                  <div
                    className="w-[20rem] h-[16.7rem] bg-cover bg-center rounded-[25px] z-30 relative"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-[4rem] md:px-32">
        <div className="bg-[#E0E0E0] flex justify-center items-center rounded-[25px]">
          <p className="text-[18px] font-[500] text-center p-5 px-8">
            Our services are tailored to meet the unique needs of each client,
            ensuring that we deliver effective solutions that help businesses
            grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Four;
