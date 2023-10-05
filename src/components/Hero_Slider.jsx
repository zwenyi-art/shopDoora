import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import woman from "../assets/woman.png";
import woman2 from "../assets/woman2.png";
import "swiper/css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Hero_Slider = () => {
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
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full "
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        ref={sliderRef}
      >
        <SwiperSlide>
          <div className="z-0 w-full h-full flex items-center justify-center bg-green-500 relative">
            <img src={woman} alt="" />
            {/* title and text  */}
            <div className="absolute gap-y-1 w-fit bottom-2  text-white flex flex-col text-center items-center justify-center ">
              <p>The Best Look</p>
              <h1 className="text-2xl font-semibold tracking-wider">
                Anytime AnyWhere
              </h1>
              <div className="">
                <p>Starts from 10,000 MMK</p>
                <button className="bg-black/30 border-[0.5px] rounded-full px-7 py-2 w-fit">
                  View
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="z-0 w-full h-full flex items-center justify-center bg-green-500 relative">
            <img src={woman2} alt="" />
            {/* title and text  */}
            <div className="absolute gap-y-1 w-fit bottom-2  text-white flex flex-col text-center items-center justify-center ">
              <p>The Best Look</p>
              <h1 className="text-2xl font-semibold tracking-wider">
                Anytime AnyWhere
              </h1>
              <div className="">
                <p>Starts from 10,000 MMK</p>
                <button className="bg-black/30 border-[0.5px]   rounded-full px-7 py-2 w-fit">
                  View
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="z-10   top-0 absolute  w-full h-full flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="bg-black/25 py-11 h-fit w-fit px-[3px] rounded-t-md rounded-b-md text-white font-extrabold"
        >
          <FiArrowLeft></FiArrowLeft>
        </button>
        <button
          onClick={handleNext}
          className="bg-black/25 py-11 h-fit w-fit px-[3px] rounded-t-md rounded-b-md text-white font-extrabold"
        >
          <FiArrowRight></FiArrowRight>
        </button>
      </div>
    </>
  );
};

export default Hero_Slider;
