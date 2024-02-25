/** @format */
"use client";
import React from "react";
import Image from "next/image";
import items from "../data/Topbar";
import Link from "next/link";

function Nav() {
  return (
    <div className=" sticky top-0 z-50">
      <div className=" bg-white flex h-[70px] gap-5 py-2 justify-between px-11  items-center shadow-lg ">
        <div className="flex gap-5 justify-between py-2.5 ">
          <Link
            href="/"
            className="flex gap-1 justify-between items-center text-2xl font-bold  ">
            <Image
              loading="lazy"
              src="svgs/Logo.svg"
              className="aspect-[1.75] w-[46px]"
              alt="Company Logo"
              height={32}
              width={32}
            />
            <div className=" ">Sue U</div>
          </Link>
          <div className="flex  gap-5 justify-between items-center px-11  text-gray-500 ">
            {items.map((item, index) => (
              <Link
                href={item.url}
                className=" hover:text-black cursor-pointer transition duration-2000"
                key={index}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center my-auto text-sm font-medium">
          <Image
            loading="lazy"
            src="svgs/Lang.svg"
            className="bg-primary/80 rounded-lg p-2 cursor-pointer hover:shadow-lg"
            alt="User Icon"
            height={40}
            width={40}
          />
          <button className="  button">Log In</button>
          <Link href="/sign-up" className=" button-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
