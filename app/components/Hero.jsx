/** @format */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="bg-hero bg-cover">
      <div className="w-full  bg-white/30   gap-6 py-4  flex  overflow-y-hidden flex-col items-center ">
        <div className="  text-white font-bold  text-center leading-relaxed text-6xl">
          <p className="">Your Legal Solutions </p>
          <div className=" flex justify-center">
            <div className="w-fit  relative">
              <img
                alt="sue"
                src="/images/div.png"
                className="  absolute -right-14  rounded-lg rounded-r-none right- bottom-2 "
              />
              <p className=" z-50">Made Simple</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center p-4  flex-col  bg-white   rounded-3xl bg-opacity-5 backdrop-blur-md">
          <li className="flex  items-center text-white text-2xl gap-3 ">
            <img src="/svgs/clock.svg" alt="" />
            Less than 5 MIN
          </li>
          <li className="flex  items-center text-white text-2xl gap-3 ">
            <img src="/svgs/mic.svg" alt="" />
            Just say what you want
          </li>
          <li className="flex items-center transition-all text-white text-2xl gap-3 ">
            <img src="/svgs/credit.svg" alt="" />
            Get your claims free
          </li>
        </div>
        <div>
          <Link
            href="/create"
            className="justify-center px-3 transition  lg:px-7 py-2 shadow-white shadow-2xl backdrop-blur-lg text-white rounded-2xl hover:shadow-lg text-3xl  bg-primary/80">
            Click to start Sue
          </Link>
        </div>
        <div className=" lg:w-2/3 md:mx-2">
          <img
            className=" bg-white   rounded-3xl bg-opacity-5 backdrop-blur-md"
            src="images/Workflow.png"
            alt=""
          />
        </div>
        {/* <Image
        width={window.innerWidth}
        height={window.innerHeight - 70}
        layout="responsive"
        src="/images/Hero.jpg"
        className="absolute opacity-80 -z-20"
        alt=""
      /> */}
      </div>
    </div>
  );
}

export default Hero;
