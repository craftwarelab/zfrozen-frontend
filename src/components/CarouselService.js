import React, { useState, useEffect, useRef } from "react";

const CarouselService = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = useRef(3); // Default items per slide
  const intervalRef = useRef(null); // To store the interval
  const { whatWeDoData, setSelectedID } = props;

  // Adjust items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 480) {
        itemsPerSlide.current = 1; // 1 item per slide on mobile
      } else if (width <= 768) {
        itemsPerSlide.current = 2; // 2 items per slide on tablets
      } else {
        itemsPerSlide.current = 3; // Show all 9 items on desktop view
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
            whatWeDoData.length / itemsPerSlide.current
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
  }, [whatWeDoData]);

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
        {whatWeDoData.map((item) => (
          <div
            className="w-full p-4"
            key={item.id}
            style={{
              flex: `0 0 ${100 / itemsPerSlide.current}%`, // Responsive width per item
            }}
            onClick={() => setSelectedID(item.id)}
          >
            <div className="flex flex-col justify-between h-full max-w-[30rem] bg-[#000000] rounded-[25px] relative overflow-hidden">
              <div className="p-5">
                <p className="text-white text-[24px] font-[400]">
                  {item.title}
                </p>
              </div>
              <hr className="w-full h-[0.5rem] opacity-50" />
              <div className="mt-[3rem] relative flex flex-col items-center justify-center">
                {/* Background divs */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[30px] w-full max-w-[26rem] h-[16.5rem] bg-[#737373] opacity-45 rounded-[25px] z-10"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15px] w-full max-w-[28rem] h-[16.5rem] bg-[#737373] rounded-[25px] z-20"></div>
                {/* Foreground div with dynamic background image */}
                <div
                  className="relative z-30 w-full max-w-[30rem] h-[18.7rem] bg-cover bg-center rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[25px]"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                >
                  <div className="absolute -bottom-2 -right-2 p-3 bg-[#1F2232] rounded-tl-[45px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[25px]">
                    <svg
                      className="-rotate-45 p-0 cursor-pointer"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="#FFD700"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="63.5"
                        width="63"
                        height="63"
                        rx="31.5"
                        transform="rotate(-90 0.5 63.5)"
                        stroke="black"
                      />
                      <path
                        d="M20.6667 30.5833C19.8843 30.5833 19.25 31.2176 19.25 32C19.25 32.7824 19.8843 33.4167 20.6667 33.4167L40.6215 33.4167L33.8316 40.2066C33.2784 40.7598 33.2784 41.6568 33.8316 42.2101C34.3848 42.7633 35.2818 42.7633 35.8351 42.2101L44.0417 34.0035C45.1481 32.897 45.1482 31.103 44.0417 29.9965L35.8351 21.7899C35.2818 21.2367 34.3848 21.2367 33.8316 21.7899C33.2784 22.3432 33.2784 23.2402 33.8316 23.7934L40.6215 30.5833L20.6667 30.5833Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselService;
