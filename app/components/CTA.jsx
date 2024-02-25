/** @format */

import React from "react";
import Title from "./Title";

function CTA() {
  return (
    <div className=" flex flex-col justify-center items-center gap-6">
      <Title
        title="Get start It is time."
        body="Ready to take control of your legal situation? Sign up for a free account with SueU and discover how easy it can be to navigate the legal system with confidence.What is your email?Subscribe!"
      />

      <div className="flex-grow-0 flex-shrink-0 w-[480px] h-[57px] relative">
        <div
          className="w-[480px] h-[57px] absolute left-0 top-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(131deg, #fc7064 -6.99%, #4f4fba 100.24%)",
            boxShadow: "6px 6px 32px 0 rgba(0,0,0,0.25)",
          }}>
          <p className="w-[315.64px] h-[23px] absolute left-6 top-[17.5px] text-lg text-left text-white/75">
            What is your email?
          </p>
          <div
            className="w-[108.56px] h-10 absolute left-[363.44px] top-[9px] rounded-2xl bg-black/25"
            style={{ boxShadow: "0px 1px 1px 0 rgba(0,0,0,0.1)" }}>
            <p className="w-[108.76px] h-10 absolute left-0 top-0 text-base font-medium text-center text-white">
              Subscribe!
            </p>
          </div>
        </div>
        <svg
          width={482}
          height={59}
          viewBox="0 0 482 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1px] top-[-1px]"
          preserveAspectRatio="none">
          <path
            d="M457 0.65625H25C11.7452 0.65625 1 11.4014 1 24.6562V33.6562C1 46.9111 11.7452 57.6562 25 57.6562H457C470.255 57.6562 481 46.9111 481 33.6562V24.6562C481 11.4014 470.255 0.65625 457 0.65625Z"
            stroke="white"
            stroke-opacity="0.25"
          />
        </svg>
      </div>
    </div>
  );
}

export default CTA;
