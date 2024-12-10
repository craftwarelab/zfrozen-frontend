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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials().then((data) => {
      setTestimonials(data);
    });
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  return (
    <div className="bg-black px-4 py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center">
        <p className="text-white font-[600] text-[50px] text-center">
          Client Testimonial
        </p>
      </div>
      <div className="flex justify-center flex-col items-center mt-14 xl:px-32">
        <p className="text-[28px] font-[400] text-white text-center">
          Testimonials That <br /> Speak to
          <span className="text-[#FFD700]"> Our Results</span>
        </p>
        <p className="text-[18px] text-white mt-5 text-center sm:w-1/2">
          See how our services have made a difference. Our clients share their
          stories of growth, improved online presence, and increased business
          success. Discover the impact we create, one project at a time.
        </p>
      </div>
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 xl:px-32">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
      {/* Automatic Carousel for small devices */}
      <div className="sm:hidden overflow-hidden mt-14 xl:px-32">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0"
              style={{ flexBasis: "100%" }}
            >
              <TestimonialCard index={index} {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eight;
