import React, { useState, useEffect } from "react";
import TeamGrid from "../../components/TeamGrid";
import teamgrid from "./teamgrid.json";

const fetchTestimonials = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(teamgrid);
    }, 2000);
  });
};
const Night = () => {
  const [teamGrid, setTeamgrid] = useState([]);
  useEffect(() => {
    fetchTestimonials().then((data) => {
      setTeamgrid(data);
    });
  }, []);
  return (
    <div className="bg-white px-4 py-20 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-center items-center">
        <p className="text-black font-[600] text-[50px] text-center">
          Meet our Team
        </p>
      </div>
      <div className="mt-14 xl:px-32">
        <div className="flex justify-center items-center bg-[#E0E0E0] p-6 rounded-[10px]">
          <p className="text-center text-[18px] font-[400] ">
            Our team is made up of experienced professionals who are passionate
            about technology and dedicated to helping businesses succeed. With
            expertise in web development, app development, software development,
            and digital marketing, our team has the skills and knowledge to
            deliver exceptional results.
          </p>
        </div>
        <div>
          <TeamGrid data={teamGrid} />
        </div>
      </div>
    </div>
  );
};

export default Night;
