import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

import new1 from "../assets/new1.png";
import new2 from "../assets/new2.png";
import new3 from "../assets/new3.png";
import new4 from "../assets/new4.png";
const NewSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      className="w-full h-full rounded-md  overflow-hidden"
    >
      <SwiperSlide>
        <div className="w-full flex justify-between   h-[220px] rounded-md bg-[#e9ba2f] relative">
          <div className="w-full h-full text-xl font-bold  flex flex-col  justify-center text-left pl-5 pt-10 text-white">
            <h1>Citrus Mon</h1>
            <h1>20,000 Pul</h1>
            <h1>Disposable</h1>
            <h1>3 Percent</h1>
            <h1>30,000 MMK</h1>
          </div>
          <div className="w-full h-full ">
            <img
              src={new1}
              alt=""
              className="h-[190px] absolute bg-blend-color-dodge -bottom-1 -right-1 flex justify-end"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full    h-[220px] rounded-md bg-[#fa8b94] relative">
          <div className="w-full h-full text-xl font-bold  flex flex-col  justify-center text-left pl-5 pt-10 text-white">
            <h1>Strawberry</h1>
            <h1>Yogurt with</h1>
            <h1>Refreshing Flavor</h1>
            <h1>Nic 3 Percent</h1>
            <h1>30,000 MMK</h1>
          </div>
          <div className="w-full h-full ">
            <img
              src={new2}
              alt=""
              className="h-[190px] absolute bg-blend-color-dodge -bottom-1 -right-1 flex justify-end"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full    h-[220px] rounded-md bg-[#3eb4eb] relative">
          <div className="w-full h-full text-xl font-bold  flex flex-col  justify-center text-left pl-5 pt-10 text-white">
            <h1>Strawberry</h1>
            <h1>Yogurt with</h1>
            <h1>Refreshing Flavor</h1>
            <h1>Nic 3 Percent</h1>
            <h1>30,000 MMK</h1>
          </div>
          <div className="w-full h-full ">
            <img
              src={new3}
              alt=""
              className="h-[190px] absolute bg-blend-color-dodge -bottom-1 -right-1 flex justify-end"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full    h-[220px] rounded-md bg-[#76d257] relative">
          <div className="w-full z-50 h-full text-xl font-bold  flex flex-col  justify-center text-left pl-5 pt-10 text-white">
            <h1>Strawberry</h1>
            <h1>Yogurt with</h1>
            <h1>Refreshing Flavor</h1>
            <h1>Nic 3 Percent</h1>
            <h1>30,000 MMK</h1>
          </div>
          <div className="w-full h-full z-0">
            <img
              src={new4}
              alt=""
              className="h-[150px] z-0 absolute bg-blend-color-dodge -bottom-1 -right-1 flex justify-end"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default NewSlider;
