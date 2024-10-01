import React from "react";
import Afrikabal from "@/images/afrikabal.png";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

const HelpDropUp = () => {
  return (
    <div className="bg-lime-200 w-auto h-[75vh] p-4 font-pacifico z-[100] overflow-y-scroll overflow-x-hidden mt-4">
      <div className="flex justify-between content-center p-2">
        <Image src={Afrikabal} width={60} height={60} alt="Afrikabal Logo" />
        <div className="relative">
          <div className="border border-solid w-10 h-10 rounded-full bg-black text-white text-center content-center absolute right-16 z-10">
            R
          </div>
          <div className="border border-solid w-10 h-10 rounded-full bg-black text-white text-center content-center absolute right-9 z-20">
            K
          </div>
          <div className="border border-solid w-10 h-10 rounded-full bg-black text-white text-center content-center absolute right-2 z-30">
            T
          </div>
        </div>
      </div>
      <div className="font-extrabold text-xl mt-10">
        <h1 className="text-lime-700">Hi there 👋</h1>
        <h1 className="text-white">How can we help?</h1>
      </div>
      <div className="bg-white text-black p-2 w-72 h-20 mt-5 rounded-lg">
        <h1 className="text-sm font-semibold">Recent message</h1>
        <div className="flex justify-between content-center">
          <div className="relative flex items-center justify-center mt-4">
            <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center absolute left-2 bottom-6 z-10">
              R
            </div>
            <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center absolute left-0 top-0 z-20">
              K
            </div>
            <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center absolute left-4 top-0 z-30">
              T
            </div>
          </div>
          <div className="p-2">
            <p className="font-bold text-xs">
              Hello there, Please confirm the curr...
            </p>
            <p className="text-xs text-black/50"> Afrikabal .3h ago</p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black p-4 w-72 h-16 mt-5 rounded-lg">
        <div className="w-5 h-5 rounded-full bg-lime-600 text-white text-xs flex items-center justify-center">
          <MdDone />
        </div>
        <div className="relative left-10 bottom-6">
          <p className="font-semibold text-xs relative">
            Status: All systems operational
          </p>
          <p className="text-xs text-black/50">Updated Sep 30, 16:25 CET</p>
        </div>
      </div>
      <div className="bg-white text-black p-4 w-72 h-16 mt-5 rounded-lg relative">
        <div className="">
          <p className="font-semibold text-xs">Send us a message</p>
          <p className="text-xs text-black/50">
            We typically reply in a few minutes
          </p>
        </div>
        <div className="text-lime-600 font-extrabold text-xl absolute right-6 bottom-6">
          <BiSolidSend />
        </div>
      </div>

      <div className="bg-white text-black p-4 w-72 h-auto mt-5 rounded-lg">
        <input
          className="w-full h-10 p-4 bg-lime-50 rounded-lg text-xs cursor-pointer hover:bg-lime-100"
          type="search"
          placeholder="Search for help"
        />
        <div className="relative">
          <FaSearch className="text-lime-600 font-extrabold absolute bottom-3 right-4" />
        </div>
        <div className="relative font-xs text-xs cursor-pointer rounded-md p-3 mt-2 hover:bg-lime-50">
          <p>Chat With Us</p>
          <FaAngleRight className="text-lime-600 absolute top-3 right-4 font-extrabold" />
        </div>
        <div className="relative font-xs text-xs cursor-pointer rounded-md p-3 hover:bg-lime-50">
          <p>How Afrikabal Protects You</p>
          <FaAngleRight className="text-lime-600 absolute top-3 right-4 font-extrabold " />
        </div>
        <div className="relative font-xs text-xs cursor-pointer rounded-md p-3 hover:bg-lime-50">
          <p>Block Your Account</p>
          <FaAngleRight className="text-lime-600 absolute top-3 right-4 font-extrabold" />
        </div>
        <div className="relative font-xs text-xs cursor-pointer rounded-md p-3 hover:bg-lime-50">
          <p>Support</p>
          <FaAngleRight className="text-lime-600 absolute top-3 right-4 font-extrabold" />
        </div>
      </div>
      <div className="bg-white text-black w-72 h-16 mt-5 p-4 rounded-lg flex justify-between">
        <div className="hover:text-lime-600">
          <RiHomeSmile2Fill className="text-3xl cursor-pointer" />
          <p className="text-xs">Home</p>
        </div>
        <div className="hover:text-lime-600">
          <MdOutlineMessage className="text-3xl cursor-pointer " />
          <p className="text-xs">Messages</p>
        </div>
        <div className="hover:text-lime-600">
          <IoMdHelpCircleOutline className="text-3xl cursor-pointer" />
          <p className="text-xs">Help</p>
        </div>
      </div>
    </div>
  );
};

export default HelpDropUp;
