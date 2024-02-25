/** @format */

import React from "react";

function Title({ title, body, width = 700 }) {
  return (
    <div
      className={`w-[700px] gap-2 flex flex-col justify-center items-center`}>
      {" "}
      <p className={`text-6xl font-bold text-center tracking-[-0.08em] w-64`}>
        {title}
      </p>
      <p className="text-center ">{body}</p>
    </div>
  );
}

export default Title;
