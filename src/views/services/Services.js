import React, { useState, useEffect } from "react";
import service from "./service.json";

const fetchTechnologies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(service);
    }, 2000);
  });
};

const Services = () => {
  const [data, setData] = useState(null); // Set initial state to null for better loading check

  useEffect(() => {
    fetchTechnologies().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="px-8 sm:px-14 py-20 bg-[#1F2232]">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] p-5 sm:text-[60px] text-[40px] md:text-[60px] lg:text-[60px] xl:text-[60px] ">
          Our Services
        </p>
      </div>

      <div className="relative">
        {data ? (
          data.map((service, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row justify-between items-center md:px-32 my-14 space-y-5 md:space-y-0">
                <div className="flex flex-col text-center md:text-left sm:pr-10 w-full">
                  <p className="text-white font-[500] text-[24px] md:text-[28px] mb-5">
                    {service.name}
                  </p>
                  <span className="text-white font-[400] mb-3">
                    {service.description}
                  </span>
                  <div className="flex sm:justify-start justify-center">
                    <button className="text-[#000000] w-[12rem] font-[500] px-8 py-2 rounded-[8px] bg-[#FFD700] cursor-pointer hover:bg-[#ffe240]">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <img
                    src={service.image}
                    alt="services"
                    className="rounded-xl max-h-[300px] object-cover"
                  />
                </div>
              </div>
              <hr className="px-5 h-[1px] bg-[#434343] border-none" />
            </React.Fragment>
          ))
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#FFD700] rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
