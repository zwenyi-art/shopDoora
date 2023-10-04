import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight } from "react-icons/fi";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";
import box5 from "../assets/box5.png";
import box6 from "../assets/box6.png";
import "swiper/css";
import "swiper/css/navigation";

import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import device1 from "../assets/device_pg1.png";
const Devices_Page_Slider = () => {
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
        spaceBetween={1}
        slidesPerView={1}
        className="relative"
      >
        <SwiperSlide>
          <div className="w-[100px] h-[140px] px-2 flex flex-col items-center justify-center gap-y-3">
            <div className="w-full h-fit  rounded-md flex items-center justify-center bg-[#eaeaea] pt-4">
              <img src={box1} alt="" className="h-[70px] " />
            </div>
            <div className="flex flex-col text-white items-center justify-center">
              <h1 className="text-[10px]">Refreshing Mint</h1>
              <p className="text-[10px]">30,000 MMK</p>
              <div className="text-[#fcc100] text-[10px] flex gap-x-1 flex-row items-center">
                <AiFillStar></AiFillStar>
                <p>600 points</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100px] h-[140px] px-2 flex flex-col items-center justify-center gap-y-3">
            <div className="w-full h-fit  rounded-md flex items-center justify-center bg-[#eaeaea] pt-4">
              <img src={box1} alt="" className="h-[70px] " />
            </div>
            <div className="flex flex-col text-white items-center justify-center">
              <h1 className="text-[10px]">Refreshing Mint</h1>
              <p className="text-[10px]">30,000 MMK</p>
              <div className="text-[#fcc100] text-[10px] flex gap-x-1 flex-row items-center">
                <AiFillStar></AiFillStar>
                <p>600 points</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <div className="flex-1 w-full flex items-center z-10 h-full px-1 ">
        <button className="bg-black/40 w-fit h-[100px] overflow-hidden rounded-md flex items-center justify-center px-1" onClick={handleNext}>
          <FiArrowRight></FiArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Devices_Page_Slider;
