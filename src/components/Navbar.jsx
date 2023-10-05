import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { TfiShoppingCart } from "react-icons/tfi";
import { AiOutlineMenu } from "react-icons/ai";
import doora from "../assets/doora.png";
const Navbar = () => {
  return (
    <div className="bg-black/70  z-30 sticky top-0 backdrop-blur-sm shadow-md w-full h-[20px] px-1 py-5  flex flex-row items-center justify-between">
      <div className="">
        <img src={doora} alt="" />
      </div>
      <div className="flex flex-row items-center gap-x-3 justify-center text-white">
        <BiSearchAlt2 className="text-[20px] " />
        <TfiShoppingCart className="text-[20px] "></TfiShoppingCart>
        <AiOutlineMenu className="text-[20px] "></AiOutlineMenu>
      </div>
    </div>
  );
};

export default Navbar;
