import React from "react";
import woman from "../assets/woman.png";
import Navbar from "./Navbar";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col relative ">
      <div className="w-full h-full flex items-center justify-center bg-green-500 relative">
        <img src={woman} alt="" />
        {/* title and text  */}
        <div className="absolute gap-y-1 w-fit bottom-2  text-white flex flex-col text-center items-center justify-center ">
          <p>The Best Look</p>
          <h1 className="text-2xl font-semibold tracking-wider">
            Anytime AnyWhere
          </h1>
          <div className="">
            <p>Starts from 10,000 MMK</p>
            <button className="bg-black/30 rounded-full px-7 py-2 w-fit">
              View
            </button>
          </div>
        </div>
        <div className=" absolute  w-full h-full flex justify-between items-center">
          <div className="bg-black/25 backdrop-blur-sm px-1 w-fit py-11 rounded-t-md rounded-b-md">
            <FiArrowLeft></FiArrowLeft>
          </div>
          <div className="bg-black/25 backdrop-blur-sm px-1 w-fit py-11 rounded-t-md rounded-b-md">
            <FiArrowRight></FiArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
