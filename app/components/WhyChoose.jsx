/** @format */

import React from "react";
import Card from "./Card";

function WhyChoose() {
  return (
    <div className="flex gap-8 justify-center items-center flex-col mx-20">
      <div className="w-[700px] gap-2 flex flex-col justify-center items-center">
        {" "}
        <p className="text-6xl font-bold text-center w-96">Why Choose SueU</p>
        <p className="text-center ">
          Using cutting-edge artificial intelligence technology, SueU analyzes
          your specific case details and generates personalized legal documents
          and claim forms tailored to your needs. Our intuitive interface guides
          you through each step of the process, eliminating the complexity and
          confusion often associated with legal proceedings.
        </p>
      </div>

      <div className=" container flex   overflow-x-scroll overflow-hidden ">
        <div className=" flex gap-12">
          <Card
            color={"bg-purple-400"}
            subject="Efficiency"
            body="Say goodbye to lengthy consultations and paperwork. With SueU, you can create and submit your legal documents in minutes, not days."
          />
          <Card
            color={"bg-teal-500"}
            subject="Affordability"
            body="Traditional legal services can be costly. SueU offers transparent pricing and flexible payment options, ensuring that quality legal assistance is within reach for everyone."
          />
          <Card
            color={"bg-sky-800"}
            subject="Accuracy"
            body="Our AI algorithms are constantly learning and evolving, ensuring that your documents are accurate, up-to-date, and compliant with relevant laws and regulations."
          />
          <Card
            color={"bg-purple-400"}
            subject="Efficiency"
            body="Say goodbye to lengthy consultations and paperwork. With SueU, you can create and submit your legal documents in minutes, not days."
          />
          <Card
            color={"bg-teal-500"}
            subject="Efficiency"
            body="Say goodbye to lengthy consultations and paperwork. With SueU, you can create and submit your legal documents in minutes, not days."
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
