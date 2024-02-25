/** @format */

import React from "react";
import LawyerCard from "./LawyerCard";
import Title from "./Title";

function OurLawyer() {
  return (
    <div className="flex gap-8 justify-center items-center flex-col ">
      <Title
        title="Meet Our Lawyers"
        body="Ready to take control of your legal situation? Sign up for a free
          account with SueU and discover how easy it can be to navigate the
          legal system with confidence."
      />

      <div className="flex gap-12">
        <LawyerCard
          name="John Doe"
          role="Legal Consultant"
          image="/images/Lawyers/3.png"
        />
        <LawyerCard
          name="Julia Rob"
          role="Legal Advisor"
          image="/images/Lawyers/2.png"
        />
        <LawyerCard
          name="Mel Bob"
          role="Corporate Lawyer"
          image="/images/Lawyers/1.png"
        />
        <LawyerCard
          name="John Doe"
          role="Legal Consultant"
          image="/images/Lawyers/3.png"
        />
      </div>
    </div>
  );
}

export default OurLawyer;
