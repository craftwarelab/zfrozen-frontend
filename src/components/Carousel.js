import React, { useState, useEffect, useRef } from "react";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = useRef(3); // Default items per slide
  const intervalRef = useRef(null); // To store the interval
  const { portfolioData, setSelectedID } = props;
  // Adjust items per slide based on screen size
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

  // Auto slide every 3 seconds with smooth transition
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const totalSlides = Math.ceil(
            portfolioData.length / itemsPerSlide.current
          );
          if (prevIndex + 1 >= totalSlides) {
            return 0; // Reset to first slide
          } else {
            return prevIndex + 1;
          }
        });
      }, 3000); // 3 seconds delay
    };

    startAutoSlide();

    return () => clearInterval(intervalRef.current); // Clean up interval on unmount
  }, [portfolioData]);

  // Get the current visible slides
  // const visibleSlides = portfolioData.slice(
  //   currentIndex * itemsPerSlide.current,
  //   currentIndex * itemsPerSlide.current + itemsPerSlide.current
  // );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel items */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / itemsPerSlide.current)
          }%)`,
        }}
      >

            {portfolioData.map((item, index) => (
              <div
                className="w-full p-4"
                key={item.id}
                style={{ flex: `0 0 ${100 / itemsPerSlide.current}%` }} // Responsive width per item
                onClick={() => setSelectedID(item.id)}
              >
                <div className="rounded-[25px] relative overflow-hidden">
                  <div
                    className="h-[16.7rem] bg-cover bg-center rounded-[25px] relative"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] opacity-60 hover:opacity-80 rounded-[25px]"></div>
                    <p className="absolute font-[600] text-[20px] bottom-4 left-4 text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Carousel;
