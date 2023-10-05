import React from "react";
import woman from "../assets/woman.png";
import Navbar from "./Navbar";
import Hero_Slider from "./Hero_Slider";
const Hero = () => {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      <Hero_Slider></Hero_Slider>
    </div>
  );
};

export default Hero;
