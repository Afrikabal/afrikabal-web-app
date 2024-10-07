"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import Image from "next/image";
import Afrikabal from "@/images/afrikabal.png";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import ValidateLoginWithEmail from "@/app/components/login/ValidateLoginWithEmail";

const ValidateLogin = () => {
  const [showHelp, setShowHelp] = useState(false);
  return (
    <div className="bg-white min-h-screen scroll-mx-0 pt-2 pb-8 h-full md:text-sm font-pacifico">
      <div className="flex justify-between fixed top-0 left 0 shadow-md w-full h-16 px-6 py-2 bg-white z-[100]">
        <Link href="/landing">
          <Image alt="Afrikabal logo" src={Afrikabal} width={60} height={60} />
        </Link>
      </div>

      <div className="w-auto md:w-1/3 bg-lime-50 mx-12 rounded-md text-xs lg:w-1/3 mt-20">
        <div className="grid grid-cols-1 space-x-8 text-lime-600 mx-6 py-2">
          <p>
            <FaLock className="absolute mt-2" />
          </p>

          <div className="text-black/50">
            Please check that you are visiting the correct URL
          </div>
          <div>
            <Link href="/login" className="text-lime-600 font-extrabold">
              https://app.afrikabal.com
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ValidateLoginWithEmail />
      </div>
      {showHelp ? (
        <div
          className="bg-lime-600 text-white rounded-full fixed right-2 bottom-4 shadow-lime-500 transition-transform duration-300 hover:scale-110 p-2 text-3xl cursor-pointer"
          onClick={() => setShowHelp(!showHelp)}
        >
          <IoChevronDown />
        </div>
      ) : (
        <div
          className="bg-lime-600 text-white rounded-full fixed right-2 bottom-4 shadow-lime-500 transition-transform duration-300 hover:scale-110 p-2 text-3xl cursor-pointer"
          onClick={() => setShowHelp(!showHelp)}
        >
          <BiSolidMessageRoundedError />
        </div>
      )}
    </div>
  );
};

export default ValidateLogin;
