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
    <div className="bg-black px-4 py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">
          Client Testimonial
        </p>
      </div>
      <div className="flex justify-center flex-col items-center mt-14 xl:px-32">
        <p className="text-[28px] font-[400] text-white text-center">
          Testimonials That <br/> Speak to
          <span className="text-[#FFD700]"> Our Results</span>
        </p>
        <p className="text-[18px] text-white mt-5 text-center sm:w-1/2">
          See how our services have made a difference. Our clients share their
          stories of growth, improved online presence, and increased business
          success. Discover the impact we create, one project at a time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 xl:px-32">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Eight;
