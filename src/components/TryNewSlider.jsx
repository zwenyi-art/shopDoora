import React, { useCallback, useReducer, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import try1 from "../assets/try1.png";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
const TryNewSlider = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="w-full h-full relative flex flex-row items-center justify-center">
      
      <Swiper
        ref={sliderRef}
        spaceBetween={50}
        slidesPerView={1}
        className="h-full w-full z-0"
      >
        <SwiperSlide>
          <div className=" w-full flex items-center justify-center h-[130px] rounded-md  overflow-hidden bg-[#111216] relative">
            <img src={try1} alt="" className="opacity-75 -ml-[150px] -mb-4" />
            <div className=" text-white flex flex-col gap-y-2 items-center justify-center absolute right-0 px-4 h-full">
              <h1 className="font-bold text-xl">Try New Flavor</h1>
              <p className="text-sm">Citrus Monster</p>
              <button className="bg-black/50 border-[0.1px]    w-fit px-6 py-2 rounded-full ">
                View
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full flex items-center justify-center h-[130px] rounded-md  overflow-hidden bg-[#111216] relative">
            <img src={try1} alt="" className="opacity-75 -ml-[150px] -mb-4" />
            <div className=" text-white flex flex-col gap-y-2 items-center justify-center absolute right-0 px-4 h-full">
              <h1 className="font-bold text-xl">Try New Flavor</h1>
              <p className="text-sm">Citrus Monster</p>
              <button className="bg-black/50 border-[0.1px]    w-fit px-6 py-2 rounded-full ">
                View
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex-1 w-full z-10 h-full px-1 ">
        <button className="bg-black/40 w-fit h-[100px] overflow-hidden rounded-md flex items-center justify-center px-1" onClick={handleNext}>
          <FiArrowRight></FiArrowRight>
        </button>
      </div>
    </div>
  );
};

export default TryNewSlider;
