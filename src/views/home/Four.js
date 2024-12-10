import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
import weDo from "./weDo.json";
import Carousel from "../../components/Carousel";

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
  // const settings = {
  //   className: "center",
  //   dots: true,
  //   // fade: true,
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 2800,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  // };

  return (
    <div className="bg-[#1F2232] px-4 py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] mb-8 text-[50px] text-center">
          What We Do?
        </p>
      </div>

      <div className="slider-container xl:px-32 mt-5">
        <Carousel
          portfolioData={designData}
          setSelectedID={null}
          type={"wahtwedo"}
        />
      </div>

      <div className="mt-[4rem] xl:px-32">
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
