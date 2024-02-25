/** @format */

import React from "react";

function Card({ subject, body, color }) {
  return (
    <div
      className={` w-96 h-[500px] p-6 rounded-2xl flex gap-8 flex-col justify-center ${color}`}>
      <p className="text-white font-bold text-2xl  border-white/40 pb-2 inline-block border-b">
        {subject}
      </p>

      <p className="text-white px-4">{body}</p>
    </div>
  );
}

export default Card;
