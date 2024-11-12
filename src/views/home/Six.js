import React, { useState, useEffect } from "react";
import technologyData from "./technologyData.json";

const tecType = [
  "All",
  "Frontend",
  "Backend",
  "Framework",
  "Mobile",
  "Database",
  "Machine Learning",
  "CMS",
  "Security",
];

const fetchTechnologies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(technologyData);
    }, 2000);
  });
};
const Five = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selected, setSelected] = useState(tecType[0]);

  useEffect(() => {
    fetchTechnologies().then((data) => {
      setTechnologies(data);
    });
  }, []);

  useEffect(() => {
    let filteredTechnologies;
    if (selected === "All") {
      filteredTechnologies = technologyData;
    } else {
      const filters = {
        Frontend: (tec) => tec.frontEnd === 1,
        Backend: (tec) => tec.backEnd === 1,
        Framework: (tec) => tec.framework === 1,
        Mobile: (tec) => tec.mobile === 1,
        Database: (tec) => tec.database === 1,
        "Machine Learning": (tec) => tec.ml === 1,
        CMS: (tec) => tec.cms === 1,
        Security: (tec) => tec.security === 1,
      };
      filteredTechnologies = technologyData.filter(filters[selected]);
    }
    // Use Set to avoid duplicates
    const uniqueTechnologies = Array.from(
      new Set(filteredTechnologies.map((tec) => tec.id))
    ).map((id) => filteredTechnologies.find((tec) => tec.id === id));

    setTechnologies(uniqueTechnologies);
  }, [selected]);

  return (
    <div className="bg-black px-4 py-20 mx-auto sm:px-6 lg:px-8 text-white">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">Our Technologies</p>
      </div>
      <div className="mt-14 xl:px-32 flex flex-wrap justify-center items-center gap-4">
        {tecType &&
          tecType.map((tec) => (
            <div key={tec}>
              <button
                className={`text-[#FFFFFF] text-[14px] font-[500] px-8 py-2 rounded-[28px] ${
                  selected === tec ? "bg-[#FFD700] text-black" : ""
                } cursor-pointer hover:bg-[#ffe240] hover:text-black`}
                onClick={() => setSelected(tec)}
              >
                {tec}
              </button>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mt-3 xl:px-32">
        {technologies &&
          technologies.map((technologies) => (
            <div
              className="flex justify-center items-center bg-white rounded-md sm:h-[10rem] cursor-pointer"
              key={technologies.id}
            >
              <span className="p-4">
                <img
                  src={technologies.icon}
                  className="w-12 sm:w-20"
                  alt="icon"
                />
              </span>
            </div>
          ))}
      </div>
      <div className="mt-[4rem] xl:px-32">
        <div className="bg-[#E0E0E0] flex justify-center items-center rounded-[25px]">
          <p className="text-[18px] font-[500] text-center p-5 px-8 text-black">
            Using the right technology for the right problem is our mantra. We
            are agile about learning new processes and tools to save time and
            reduce complexity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Five;
