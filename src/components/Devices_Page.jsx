import React from "react";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import device1 from "../assets/device_pg1.png";
import device2 from "../assets/device_pg2.png";
import box1 from "../assets/box1.png";
import Devices_Page_Slider from "./Devices_Page_Slider";
const Devices_Page = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full h-full bg-[#2d2d2d] flex flex-row items-center justify-between relative">
        <div className="flex w-full h-full bg-blue-400/20">
          <div className="w-full h-full pt-6 relative">
            <img src={device1} alt="" className="h-[150px]" />
          </div>
          <div className="flex flex-col text-white w-full h-full absolute pl-16 pt-9">
            <h1 className="text-xl font-bold">Devices</h1>
            <p className="max-w-[150px]">Find the best for you here!</p>
          </div>
        </div>

        <div className="absolute flex items-center justify-end right-0 w-[150px] h-full  ">
          <Devices_Page_Slider></Devices_Page_Slider>
        </div>
      </div>
      <div className="w-full h-full bg-[#2d2d2d] flex flex-row items-center justify-between relative">
        <div className="flex w-full h-full bg-blue-400/20">
          <div className="w-full h-full pt-6 relative">
            <img src={device2} alt="" className="h-[150px]" />
          </div>
          <div className="flex flex-col text-white w-full h-full absolute pl-16 pt-9">
            <h1 className="text-xl font-bold">Devices</h1>
            <p className="max-w-[150px]">Find the best for you here!</p>
          </div>
        </div>

        <div className="absolute flex items-center justify-end right-0 w-[150px] h-full  ">
          <Devices_Page_Slider></Devices_Page_Slider>
        </div>
      </div>
    </div>
  );
};

export default Devices_Page;
