/** @format */
"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import VidPre from "./components/Video";
import WhyChoose from "./components/WhyChoose";
import OurLawyer from "./components/OurLawyer";
import CTA from "./components/CTA";
// import Main from "./components/Main";

export default function Home() {
  return (
    <div className=" flex gap-6 flex-col scroll-smooth">
      <Hero />
      <VidPre />
      <WhyChoose />
      <OurLawyer />
      <CTA />
      {/* <Main /> */}
      {/* <WhatTheySay /> */}
    </div>
  );
}
