import React from "react";

const TeamGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data &&
        data.map((member) => (
          <div key={member.id} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg mx-auto w-32 h-32"
            />
            <p className="bg-[#FFD700] text-black font-semibold p-2 mt-4 rounded-full">
              {member.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default TeamGrid;
