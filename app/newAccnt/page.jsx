"use client";
import React from "react";
import { useState } from "react";
import UserLogo from "@/assets/user.png"
import CoperateLogo from "@/assets/coperate.png"
import Image from "next/image";
function NewAccntPage() {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  };

  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center  border-red-700">
      <div className="border-2 shadow-xl rounded w-full lg:w-1/2 space-y-5  p-4">
        <div className="border-b-2 p-2 text-lg font-semibold text-center">
          <h2>New account</h2>
        </div>
        <div className=" flex flex-col md:flex-row items-center justify-between p-2 gap-4">
          <div className={`${isChecked1 ? "border-yellow-400 border-2 rounded-md w-1/2 md:w-full p-2 shadow-none text-yellow-400 ":"border w-1/2 md:w-full p-2 shadow-md"}`}>
            <input
              type="checkbox"
              name="Individual_Accnt"
              className={`${
                isChecked1
                  ? "w-[15px] h-[15px] rounded-full border-4 border-yellow-400  outline-none cursor-pointer appearance-none"
                  : "w-[15px] h-[15px] rounded-full  border-[4px]  outline-none cursor-pointer appearance-none"
              }`}
              id=""
              checked={isChecked1}
              onChange={handleCheckbox1Change}
            />
            <div className="flex justify-between items-center">
              <div>
                <h2>Individual Account</h2>
                <p>For single user</p>
              </div>
              <Image src={UserLogo} alt="" />
            </div>
          </div>
          <div className={`${isChecked2 ? "border-yellow-400  border-2 rounded-md w-1/2 md:w-full p-2 shadow-none text-yellow-400 ":"border w-1/2 md:w-full p-2 shadow-md"}`}>
            <input
              type="checkbox"
              name="Coperate_Accnt"
              id=""
              className={`${
                isChecked2
                  ? "w-[15px] h-[15px] rounded-full border-4 border-yellow-400  outline-none cursor-pointer appearance-none"
                  : "w-[15px] h-[15px] rounded-full border-[4px]   outline-none cursor-pointer appearance-none"
              }`}
              checked={isChecked2}
              onChange={handleCheckbox2Change}
            />
            <div className="flex justify-between items-center">
              <div>
                <h2>Coperate Account</h2>
                <p>For Business</p>
              </div>
              <Image src={CoperateLogo} alt="coperate_logo" />
            </div>
          </div>
        </div>

        {isChecked1 && (
          <div className="text-center flex-col items-center flex">
            <h1 className=" italic">
              Kindly provide the customers BVN below to proceed with the account
              opening
            </h1>
            <span>Enter Customers BVN</span>
            <input type="text" className="block border my-3 rounded outline-none md:w-[300px] w-full" />
          </div>
        )}
        {isChecked2 && (
          <div className="text-center flex-col items-center italic flex w-full">
            <h1>
              Kindly provide the customers TIN below to proceed with the account
              opening
            </h1>
            <div className="text-center">
              <span>Enter Customers TIN</span>
              <input type="text" className="block border md:w-[300px] rounded w-full  my-3 outline-none " />
            </div>
          </div>
        )}
        <div className="flex items-center flex-col">
          <button className="p-1 rounded shadow-xl font-bold text-white bg-yellow-500 border w-[170px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewAccntPage;
