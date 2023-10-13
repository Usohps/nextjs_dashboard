"use client";
// import React, { useState } from "react";
import HelpcirleIcon from "@/assets/help-circle.png";
import BellIcon from "@/assets/bell.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
function Navbar({ handleToggle, active }) {
  return (
    <div className="w-full left-0 fixed top-0  bg-white flex item-center justify-between">
      <div className="w-1/4 flex items-center justify-center">
        <div className="z-10" onClick={handleToggle}>
          {active ? (
            <div className="flex justify-end w-full  p-2">
              <AiOutlineClose className="md:hidden" />
            </div>
          ) : (
            <AiOutlineMenu className="md:hidden" />
          )}
        </div>
      </div>
      {/* <div className=" flex item-center border justify-between w-1/2"> */}
      <div className="flex justify-end items-center  md:shadow-2xl px-4  gap-12 w-full ">
        <div>
          <Image
            src={HelpcirleIcon}
            alt=""
            placeholder="blur"
            className="mdx:hidden"
          />
        </div>
        <div>
          <Image
            src={BellIcon}
            alt=""
            placeholder="blur"
            className="mdx:hidden"
          />
        </div>
        <div className="text-center p-2">
          <h2 className="text-sm semi-bold">CozyPrince</h2>
          <span className="text-sm italic">CEO</span>
        </div>
      </div>
      <div>{/* <AiOutlineCaretDown/> */}</div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
