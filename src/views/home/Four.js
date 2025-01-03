import React, { useState, useEffect } from "react";
import weDo from "./weDo.json";
import CarouselService from "../../components/CarouselService"; // Import CarouselService

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
  const [selectedData, setSelectedData] = useState([]);
  const [selectedID, setSelectedID] = useState(1);

  useEffect(() => {
    fetchTechnologies().then((data) => {
      setDesignData(data);
    });
  }, []);

  useEffect(() => {
    if (selectedID) {
      const filteredData = weDo.filter((item) => item.id === selectedID);
      console.log(filteredData[0].title); // Log title or other info as needed
      setSelectedData(filteredData);
    }
  }, [selectedID]);

  return (
    <div className="bg-[#1F2232] px-4 py-10 md:py-20 lg:py-20 xl:py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] mb-8 lg:text-[50px] sm:text-[40px] text-[40px] text-center">
          What We Do?
        </p>
      </div>

      <div className="slider-container xl:px-32">
        {/* Use CarouselService and pass setSelectedID to allow selection */}
        <CarouselService
          whatWeDoData={designData} // Pass data to CarouselService
          setSelectedID={setSelectedID} // Pass setSelectedID function
          type={"whatwedo"} // Corrected the typo here (was "wahtwedo")
        />
      </div>

      <div className="md:mt-[2rem] lg:mt-[2rem] xl:px-32">
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
