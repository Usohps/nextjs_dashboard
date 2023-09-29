import React from "react";
import HelpcirleIcon from "@/assets/help-circle.png";
import BellIcon from "@/assets/bell.png";
import {AiOutlineMenu} from "react-icons/ai"
import Image from "next/image";
function Navbar() {
  return (
    <div className="w-full flex item-center justify-end static  border">
      <div className="w-1/2 flex items-center"><button><AiOutlineMenu className="md:hidden"/></button></div>
      {/* <div className=" flex item-center border justify-between w-1/2"> */}
        <div className="flex items-center justify-evenly border w-1/2 ">
        <button>
          <Image src={HelpcirleIcon} placeholder="blur" className="mdx:hidden" />
          </button>
        <button>
          <Image src={BellIcon} placeholder="blur" className="mdx:hidden" />
          </button>
        <div className="text-center">
            <h2>CozyPrince</h2>
            <span>CEO</span>
          </div>
        </div>
        <div>
          {/* <AiOutlineCaretDown/> */}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
