"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineHome,
  AiOutlineUsergroupDelete,
  AiOutlineBell,
} from "react-icons/ai";
// import RxHamburgerMenu from "react-icons/rx"
// import SiSimpleanalytics from "react-icons/si";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className="h-[100vh] shadow-lg hidden md:block  w-1/4 bg-white">
      <Image src={Logo} placeholder="blur" quality={100} />
      <div>
        <div className="flex items-center p-4 space-x-2">
          <AiOutlineHome />
        <Link href={"/"}>Home</Link>
        </div>
        <div className="">
          <div className="flex relative">
            <AiOutlineUsergroupDelete className="absolute top-5 left-5" />
            <button
              className="flex w-full relative p-4 ml-6 justify-between items-center"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Account
              {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
            </button>
          </div>

          {isOpen && (
            <div className="space-y-4">
              <div className="p-3 hover:text-yellow-400 hover:bg-slate-200 hover:border-l-4 hover:border-yellow-400">
                <Link href={"/newAccnt"}>
                  <h2>New Account</h2>
                </Link>
              </div>
              <div className="p-3 hover:text-yellow-400 hover:bg-slate-200 hover:border-l-4 hover:border-yellow-400">
                <Link href={"/"}>
                  <h2>Status</h2>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center p-4 space-x-2">
        {/* <RxHamburgerMenu/> */}
        <Link href={"/"}>Report</Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
