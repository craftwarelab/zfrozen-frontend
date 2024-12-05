import React from "react";

const TestimonialCard = ({ text, image, name, position, company, country, rating, index }) => {
  return (
    <div
      className={`p-6 h-fit rounded-[15px] flex flex-col justify-between shadow-md 
        ${index % 2 === 0 ? "bg-[#FFD700]" : "bg-white"}`}
    >
      <p className="text-black text-md mb-6 font-semibold">{text && text}</p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center items-start">
        {image ? (
          <img src={image} alt={name} className="w-10 h-10 rounded-full mr-4" />
        ) : (
          <img
            src={`account_circle_icon.png`}
            alt={name}
            className="w-10 h-10 rounded mr-4"
          />
        )}
        <div>
          {/* <p className="text-bold text-gray-500">{project && project}</p> */}
          <p className="font-bold text-black">{name && name}</p>
          <p className="text-sm text-gray-500">{position && position}</p>
          <p className="text-sm text-gray-500">{company && company}</p>
          <p className="text-sm text-gray-500">{country && country}</p>
        </div>

        <div className="flex justify-start sm:ml-auto">
          {/* Render stars based on rating */}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-black" : "text-gray-300"
                }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.432L24 9.75l-6 5.845L19.336 24 12 20.25 4.664 24 6 15.595 0 9.75l8.332-1.731L12 .587z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
