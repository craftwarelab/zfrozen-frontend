import React, { useState, useEffect } from "react";
import technologyData from "./technologyData.json";

const tecType = [
  "All",
  "IoT",
  "AI & Machine Learning",
  "Mobile Development",
  "Web Development",
  "Desktop Applications",
  "Databases",
  "Graphic Design",
  "UI/UX",
  "3D",
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
        "IoT": (tec) => tec.iot === 1,
        "Web Development": (tec) => tec.webDev === 1,
        "Mobile Development": (tec) => tec.mobileDev === 1,
        "Databases": (tec) => tec.database === 1,
        "AI & Machine Learning": (tec) => tec.aiMl === 1,
        "UI/UX": (tec) => tec.uiux === 1,
        "Graphic Design": (tec) => tec.graphicDesign === 1,
        "3D": (tec) => tec.threeD === 1,
        "Desktop Applications": (tec) => tec.desktopApps === 1,
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
    <div className="bg-black px-4 py-20 mx-auto sm:px-6 lg:px-8 text-white select-none">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">
          Our Technologies
        </p>
      </div>
      <div className="my-[2rem] xl:px-32">
        <div className="bg-[#E0E0E0] flex justify-center items-center rounded-[25px]">
          <p className="text-[18px] font-[500] text-center p-5 px-8 text-black">
            Using the right technology for the right problem is our mantra. We
            are agile about learning new processes and tools to save time and
            reduce complexity
          </p>
        </div>
      </div>
      <div className=" xl:px-32 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-4">
        {tecType &&
          tecType.map((tec) => (
            <div key={tec} className="flex justify-center items-center">
              <button
                className={` text-center text-[#FFFFFF] text-[14px] font-[500] px-8 py-2 rounded-[28px] ${selected === tec ? "bg-[#FFD700] text-black" : ""
                  } cursor-pointer hover:bg-[#FFD700] hover:text-black`}
                onClick={() => setSelected(tec)}
              >
                {tec}
              </button>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-0 mt-3 xl:px-32">
        {technologies &&
          technologies.map((technology) => (
            <img
              key={technology.id}
              src={technology.icon}
              className="w-auto sm:w-auto x"
              alt={`${technology.name} icon`}
              draggable="false"
            />
          ))}
      </div>

    </div>
  );
};

export default Five;
