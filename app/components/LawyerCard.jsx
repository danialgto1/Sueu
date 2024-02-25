/** @format */

import React from "react";

function LawyerCard({ name, role, image }) {
  return (
    <div className="flex  justify-center items-center gap-2 flex-col">
      <img
        loading="lazy"
        src={image}
        className=" aspect-square rounded-full shadow-xl"
      />
      <p className="font-bold text-2xl">{name}</p>
      <p className="">{role}</p>
    </div>
  );
}

export default LawyerCard;
