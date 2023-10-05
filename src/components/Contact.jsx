import React from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { PiArrowCounterClockwiseDuotone } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { BiPhone } from "react-icons/bi";

import qr_code from "../assets/qr_code.png";
import kpay from "../assets/kpay.png";
import wave_pay from "../assets/wave_pay.png";
import viber from "../assets/viber.png";
import twitter from "../assets/twitter.png";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-3 text-left  p-6">
      <div className=" w-full h-full flex flex-col text-left ">
        <h1 className="text-xl  font-bold tracking-wider w-full">
          Customer Service
        </h1>
        <div className="pl-2">
          <div className="pl-1 flex text-base flex-row gap-x-3 items-center justify-start w-full h-full">
            <div className="">
              <MdOutlinePrivacyTip></MdOutlinePrivacyTip>
            </div>
            <p>Terms & Privacy Policy</p>
          </div>
          <div className="pl-1 flex text-base flex-row gap-x-3 items-center justify-start w-full h-full">
            <div className="">
              <PiArrowCounterClockwiseDuotone></PiArrowCounterClockwiseDuotone>
            </div>
            <p>Return Policy</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col text-left ">
        <h1 className="text-xl  font-bold tracking-wider w-full">Language</h1>
        <div className="pl-2">
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="radio-option"
              />
              <span className="ml-2">Myanmar &#40;Unicode&#41;</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="radio-option"
              />
              <span className="ml-2">Myanmar &#40;Zawgyi&#41;</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="radio-option"
                checked
              />
              <span className="ml-2">English</span>
            </label>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col text-left ">
        <h1 className="text-xl  font-bold tracking-wider w-full">Contact Us</h1>
        <div className="pl-2">
          <div className="pl-1 flex text-base flex-row gap-x-3  w-full h-full">
            <div className="pt-1 ">
              <GrLocation></GrLocation>
            </div>
            <p>
              Lay Daunt Kan Main Road,Cashmere Stop,Near Zawana,Thingagyun
              Tsp,Yangon
            </p>
          </div>
          <div className="pl-1 flex text-base flex-row gap-x-3 items-center justify-start w-full h-full">
            <div className="">
              <BiPhone></BiPhone>
            </div>
            <p>09458489458</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col text-left ">
        <h1 className="text-xl  font-bold tracking-wider w-full">
          Download Our App
        </h1>
        <div className="pl-2">
          <div className="pl-1 flex text-base flex-row gap-x-3 items-center justify-start w-full h-full">
            <img src={qr_code} alt="" />
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col text-left gap-y-2">
        <h1 className="text-xl  font-bold tracking-wider w-full">Payment</h1>
        <div className="pl-2 flex flex-row gap-x-3 items-center justify-start w-full h-full">
          <img src={kpay} alt="" className="rounded-md" />
          <img src={wave_pay} alt="" className="rounded-md" />
        </div>
      </div>
      <div className=" w-full h-full flex flex-col text-left gap-y-2">
        <h1 className="text-xl  font-bold tracking-wider w-full">
          Follow Us On
        </h1>
        <div className="pl-2 flex flex-row gap-x-3 items-center justify-start w-full h-full">
          <div className="w-[40px] h-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
              alt=""
            />
          </div>
          <div className="w-[40px] h-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg"
              alt=""
            />
          </div>
          <div className="w-[40px] h-full">
            <img src={viber} alt="" />
          </div>
          <div className="w-[40px] h-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Telegram_blue_icon.png"
              alt=""
            />
          </div>
          <div className="w-[40px] h-full">
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
      <div className="pt-5 w-full h-full flex text-center items-center justify-center">
        <p className="text-sm max-w-[240px]">
        &copy; Copyright 2023 C by D Co,Ltd.All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
