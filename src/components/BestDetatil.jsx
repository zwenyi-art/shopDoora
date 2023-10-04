import React from "react";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";
import box5 from "../assets/box5.png";
import box6 from "../assets/box6.png";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import {IoIosArrowForward} from 'react-icons/io'
const BestDetatil = () => {
  return (
    <>
      <div className="px-3 py-2 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#eaeaea] rounded-lg w-full h-full flex flex-col items-center justify-center ">
            <div className="bg-red-600 w-fit px-2 py-[1px] font-bold text-white">
              25% OFF
            </div>
            <div className="pt-3">
              <img src={box1} alt="" className="w-fit h-fit" />
            </div>
          </div>
          <div className="pt-3 w-full h-full text-center flex flex-col items-center">
            <h1 className="text-base">Refreshing Mint</h1>
            <p className="text-base">30,000 MMK</p>
            <span className="text-xs line-through">30,000 MMK</span>
            <div className="text-[#fcc100] flex gap-x-1 flex-row items-center">
              <AiFillStar></AiFillStar>
              <p>600 points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#eaeaea] rounded-lg w-full h-full flex flex-col items-center justify-center ">
            <div className="bg-red-600 w-fit px-2 py-[1px] font-bold text-white">
              25% OFF
            </div>
            <div className="pt-3">
              <img src={box2} alt="" className="w-fit h-fit" />
            </div>
          </div>
          <div className="pt-3 w-full h-full text-center flex flex-col items-center">
            <h1 className="text-base">Refreshing Mint</h1>
            <p className="text-base">30,000 MMK</p>
            <span className="text-xs line-through">30,000 MMK</span>
            <div className="text-[#fcc100] flex gap-x-1 flex-row items-center">
              <AiFillStar></AiFillStar>
              <p>600 points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#eaeaea] rounded-lg w-full h-full flex flex-col items-center justify-center ">
            <div className="bg-red-600 w-fit px-2 py-[1px] font-bold text-white">
              25% OFF
            </div>
            <div className="pt-3">
              <img src={box3} alt="" className="w-fit h-fit" />
            </div>
          </div>
          <div className="pt-3 w-full h-full text-center flex flex-col items-center">
            <h1 className="text-base">Refreshing Mint</h1>
            <p className="text-base">30,000 MMK</p>
            <span className="text-xs line-through">30,000 MMK</span>
            <div className="text-[#fcc100] flex gap-x-1 flex-row items-center">
              <AiFillStar></AiFillStar>
              <p>600 points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#eaeaea] rounded-lg w-full h-full flex flex-col items-center justify-center ">
            <div className="bg-red-600 w-fit px-2 py-[1px] font-bold text-white">
              25% OFF
            </div>
            <div className="pt-3">
              <img src={box4} alt="" className="w-fit h-fit" />
            </div>
          </div>
          <div className="pt-3 w-full h-full text-center flex flex-col items-center">
            <h1 className="text-base">Refreshing Mint</h1>
            <p className="text-base">30,000 MMK</p>
            <span className="text-xs line-through">30,000 MMK</span>
            <div className="text-[#fcc100] flex gap-x-1 flex-row items-center">
              <AiFillStar></AiFillStar>
              <p>600 points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#eaeaea] rounded-lg w-full h-full flex flex-col items-center justify-center ">
            <div className="bg-red-600 w-fit px-2 py-[1px] font-bold text-white">
              25% OFF
            </div>
            <div className="pt-3">
              <img src={box5} alt="" className="w-fit h-fit" />
            </div>
          </div>
          <div className="pt-3 w-full h-full text-center flex flex-col items-center">
            <h1 className="text-base">Refreshing Mint</h1>
            <p className="text-base">30,000 MMK</p>
            <span className="text-xs line-through">30,000 MMK</span>
            <div className="text-[#fcc100] flex gap-x-1 flex-row items-center">
              <AiFillStar></AiFillStar>
              <p>600 points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#eaeaea] rounded-lg w-full h-full flex flex-col items-center justify-center ">
            <div className="bg-red-600 w-fit px-2 py-[1px] font-bold text-white">
              25% OFF
            </div>
            <div className="pt-3">
              <img src={box6} alt="" className="w-fit h-fit" />
            </div>
          </div>
          <div className="pt-3 w-full h-full text-center flex flex-col items-center">
            <h1 className="text-base">Refreshing Mint</h1>
            <p className="text-base">30,000 MMK</p>
            <span className="text-xs line-through">30,000 MMK</span>
            <div className="text-[#fcc100] flex gap-x-1 flex-row items-center">
              <AiFillStar></AiFillStar>
              <p>600 points</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 w-full pt-3 h-full flex items-center justify-center">
        <button className="rounded-full bg-black/10 px-10 py-1 text-center w-fit   font-bold text-black  flex items-center justify-between gap-x-4">
          View More
          <div className="hover:translate-x-1 duration-100 ">
            <IoIosArrowForward></IoIosArrowForward>
          </div>
        </button>
      </div>
    </>
  );
};

export default BestDetatil;
