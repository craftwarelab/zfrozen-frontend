import React, { useState, useEffect, useRef } from "react";

const CarouselClientLogos = ({ logosData = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = useRef(3);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      const updateItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width < 480) {
          itemsPerSlide.current = 1;
        } else if (width <= 768) {
          itemsPerSlide.current = 2;
        } else {
          itemsPerSlide.current = 3;
        }
      };
  
      updateItemsPerSlide();
      window.addEventListener("resize", updateItemsPerSlide);
      return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);
  
    useEffect(() => {
      const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const totalSlides = Math.ceil(
              logosData.length / itemsPerSlide.current
            );
            if (prevIndex + 1 >= totalSlides) {
              return 0;
            } else {
              return prevIndex + 1;
            }
          });
        }, 3000);
      };
  
      startAutoSlide();
  
      return () => clearInterval(intervalRef.current);
    }, [logosData]);
  
    if (!logosData.length) {
      return <div>No logos available to display.</div>;
    }
  
    return (
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / itemsPerSlide.current)
            }%)`,
          }}
        >
          {logosData.map((logo, index) => (
            <div
              className="w-full p-4"
              key={index}
              style={{ flex: `0 0 ${100 / itemsPerSlide.current}%` }}
            >
              <div className="flex justify-center items-center bg-transparent rounded-md h-[120px]">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-[10rem] max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CarouselClientLogos;
  