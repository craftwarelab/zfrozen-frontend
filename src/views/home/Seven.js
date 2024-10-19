import React, { useState, useEffect } from "react";
import portfolio from "./portfolio.json";
import Carousel from "../../components/Carousel";

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
    <div className="bg-[#1F2232] px-4 py-20 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">Portfolio</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center xl:px-32 my-14 space-y-5 md:space-y-0">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="text-white font-[400] text-[24px] md:text-[28px]">
            Let&lsquo;s have a look at Our
            <br />
            <span className="text-[#FFD700]">Portfolio</span>
          </p>
        </div>

        {/* Button Section */}
        <div>
          <button className="btn btn-primary text-black py-2 px-6 bg-[#FFD700] rounded-[25px] hover:bg-[#ffe240]">
            See All
          </button>
        </div>
      </div>
      <div className="xl:px-32">
        <Carousel portfolioData={portfolioData} setSelectedID={setSelectedID} type={'portfolio'}/>
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center my-2">
        {selectedData.length > 0 && (
          <div>
            <div className="flex items-center justify-center my-2">
              <p className="text-white text-[32px] font-[500]">{selectedData[0].title}</p>
            </div>
            <div>
              <p className="text-white text-[18px] font-[400] text-center">{selectedData[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Seven;
