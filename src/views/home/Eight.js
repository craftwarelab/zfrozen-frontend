import React, { useState, useEffect } from "react";
import TestimonialCard from "../../components/TestimoniaCard";
import Testimonials from "./Testimonials.json";

const fetchTestimonials = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Testimonials);
    }, 2000);
  });
};
const Eight = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetchTestimonials().then((data) => {
      setTestimonials(data);
    });
  }, []);
  return (
    <div className="bg-black px-8 sm:px-14 py-20">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">
          Client Testimonial
        </p>
      </div>
      <div className="flex justify-center flex-col items-center mt-14 px-5 md:px-32">
        <p className="text-[28px] font-[400] text-white text-center">
          Testimonials That Speak to
          <br />
          <span className="text-[#FFD700]">Our Results</span>
        </p>
        <p className="text-[18px] text-white mt-5 text-center sm:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 px-5 md:px-32">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Eight;
