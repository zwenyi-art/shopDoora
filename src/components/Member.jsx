import React from "react";
import mber1 from "../assets/mber1.png";
import diamond from "../assets/diamond.png";
import gold from "../assets/gold.png";
import dinger from "../assets/dinger.png";
import member_line from "../assets/member_line.png";
import device1 from "../assets/device1.png";
import device2 from "../assets/device2.png";
import device3 from "../assets/device3.png";
import { IoIosArrowForward } from "react-icons/io";
const Member = () => {
  return (
    <div className="w-full h-full flex flex-col p-2 gap-y-2">
      <div className="rounded-md overflow-hidden bg-black/60 w-full h-full relative">
        <div className="w-full h-full justify-center px-3 py-3 flex flex-col text-left text-white">
          <div className="flex flex-row items-center gap-x-2 pt-2">
            <img src={diamond} alt="" className="h-[30px]" />
            <img src={gold} alt="" className="h-[30px]" />
            <img src={dinger} alt="" className="h-[30px]" />
          </div>
          <div className="flex flex-col gap-y-1 pt-2">
            <div className="font-bold text-2xl ">
              <h1>Membership Program</h1>
              <div className="">
                <img src={member_line} alt="" />
              </div>
            </div>
            <p className="max-w-[240px] text-base">
              Be a Vape Pi member and get our special exclusive offers
            </p>
            <button className="bg-black/50  border-[0.5px]   w-fit px-6 py-2 rounded-full ">
              View
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <img src={mber1} alt="" className="h-[200px]" />
        </div>
      </div>
      <div className="w-full h-full flex flex-row gap-x-2 items-center justify-center">
        <div className="w-[200px] h-full rounded-md   bg-[#2d2d2d] flex flex-col items-center ">
          <div className="pt-4 py-8 w-full h-full flex items-center justify-center">
            <img src={device1} alt="" />
          </div>
          <div className="px-3 pb-4 flex flex-col w-full h-full text-white">
            <h1 className="flex items-center justify-between text-xl  font-bold">
              Devices
              <span>
                <IoIosArrowForward></IoIosArrowForward>
              </span>
            </h1>
            <div className="max-w-[130px] text-left">
              <p className="text-sm">Find the best for you here!</p>
            </div>
          </div>
        </div>

        {/* small device  */}
        <div className="w-[200px] h-full  grid grid-rows-2 gap-y-2">
          <div className="bg-[#2d2d2d]  rounded-md overflow-hidden flex flex-col gap-y-1 items-center w-full h-fit">
            <div className=" w-full h-full  flex items-center justify-center">
              <img src={device2} alt="" className="pt-2" />
            </div>
            <div className=" flex flex-col w-full h-full text-white px-2">
              <h1 className="flex items-center justify-between text-xl  font-bold">
                Devices
                <span>
                  <IoIosArrowForward></IoIosArrowForward>
                </span>
              </h1>
              <div className="max-w-[130px] text-left">
                <p className="text-sm">Find the best for you here!</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2d2d2d]  rounded-md overflow-hidden flex flex-col gap-y-1 items-center w-full h-fit">
            <div className=" w-full h-full flex items-center justify-center">
              <img src={device3} alt="" className="pt-2" />
            </div>
            <div className=" flex flex-col w-full h-full text-white px-2">
              <h1 className="flex items-center justify-between text-xl  font-bold">
                Devices
                <span>
                  <IoIosArrowForward></IoIosArrowForward>
                </span>
              </h1>
              <div className="max-w-[130px] text-left">
                <p className="text-sm">Find the best for you here!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
