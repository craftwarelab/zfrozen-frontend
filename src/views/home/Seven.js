import React, { useState, useEffect } from "react";
import portfolio from "./portfolio.json";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";


const fetchTechnologies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolio);
    }, 2000);
  });
};
const Seven = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedID, setSelectedID] = useState(1);
  useEffect(() => {
    fetchTechnologies().then((data) => {
      setPortfolioData(data);
    });
  }, []);

  useEffect(() => {
    if (selectedID) {
      const filteredData = portfolio.filter((item) => item.id === selectedID);
      console.log(filteredData[0].title);
      setSelectedData(filteredData);
    }
  }, [selectedID]);
  return (
    <div className="bg-[#1F2232] px-4 py-10 md:py-20 lg:py-20 xl:py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] lg:text-[50px] sm:text-[40px] text-[40px] text-center">
          Portfolio
        </p>
      </div>
      <div className="flex flex-row md:flex-row justify-between items-center xl:px-32 my-5 md:my-14 lg:my-14 space-y-5 md:space-y-0">
        {/* Text Section */}
        <div className="md:text-left">
          <p className="text-white font-[400] text-[20px] md:text-[28px]">
            Let&lsquo;s have a look at Our
            <br />
            <span className="text-[#FFD700] select-none md:text-left">Portfolio</span>
          </p>
        </div>

        {/* Button Section */}
        <div>
          <button className="btn btn-primary text-black py-2 px-6 bg-[#FFD700] rounded-[25px] hover:bg-[#ffe240]">
            <Link to="/portfolio" className="text-black">See All</Link>
          </button>
        </div>
      </div>
      <div className="xl:px-32">
        <Carousel
          portfolioData={portfolioData}
          setSelectedID={setSelectedID}
          type={"portfolio"}
        />
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center">
        {selectedData.length > 0 && (
          <div>
            <div className="flex items-center justify-center">
              <p className="text-white text-[18px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] font-[500] flex items-center justify-between">
                {selectedData[0]?.title}
                <svg
                  className="-rotate-45 p-2 cursor-pointer"
                  width="57"
                  height="57"
                  viewBox="0 0 64 64"
                  fill="#FFD700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="63.5"
                    width="63"
                    height="63"
                    rx="31.5"
                    transform="rotate(-90 0.5 63.5)"
                    stroke="black"
                  />
                  <path
                    d="M20.6667 30.5833C19.8843 30.5833 19.25 31.2176 19.25 32C19.25 32.7824 19.8843 33.4167 20.6667 33.4167L40.6215 33.4167L33.8316 40.2066C33.2784 40.7598 33.2784 41.6568 33.8316 42.2101C34.3848 42.7633 35.2818 42.7633 35.8351 42.2101L44.0417 34.0035C45.1481 32.897 45.1482 31.103 44.0417 29.9965L35.8351 21.7899C35.2818 21.2367 34.3848 21.2367 33.8316 21.7899C33.2784 22.3432 33.2784 23.2402 33.8316 23.7934L40.6215 30.5833L20.6667 30.5833Z"
                    fill="black"
                  />
                </svg>
              </p>
            </div>
            <div>
              <p className="text-white text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] font-[400] text-center">
                {selectedData[0]?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Seven;
