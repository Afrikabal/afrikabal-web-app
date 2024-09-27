"use client";
import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Afrikabal from "@/images/afrikabal.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (password === confirmPassword) {
      console.log("Form Submitted", { email, password });
    } else {
      alert("Passwords do not match");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen scroll-mx-0 pt-2 pb-8 h-full  md:text-sm">
      <div className="mb-8 shadow-md  py-3 z-[100] bg-white">
        <Link href="/landing">
          <Image
            alt="Afrikabal logo"
            className="h-auto mx-6 w-12 "
            src={Afrikabal}
            width={60}
            height={60}
          />
        </Link>
      </div>

      <div className="w-auto md:w-1/3 bg-lime-50 mx-12 rounded-md text-xs lg:w-1/3">
        <div className="grid grid-cols-1 space-x-8 text-lime-600 relative  mx-6 py-2">
          <p>
            <FaLock className="absolute mt-2" />
          </p>

          <div className="text-black/50">
            Please check that you are visiting the correct URL
          </div>
          <div>
            <Link href="/login" className="text-lime-600 font-extrabold ">
              https://app.afrikabal.com
            </Link>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12  bg-white rounded-md border border-black/10 shadow-md "
      >
        <div className="">
          <p className="text-lime-600  text-sm grid grid-cols-1">
            <MdOutlineArrowBackIos className="mx-1 h-3 w-3" />
            <span className="mt-1">
              <Link href="/login">Back</Link>
            </span>
          </p>
          <p className="text-black font-semibold text-lg">Email & Password</p>
          <p className="text-black/50 font-light text-xs px-6 w-72 my-2 grid grid-cols-2 lg:grid-cols-1">
            Create a profile with a few details. Your password must have at
            least 8 characters including letters and a number.
          </p>
        </div>

        <div className="flex flex-col my-3">
          <label className="text-black/80 font-light text-sm">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-white/70 text-black/80 shadow-md rounded-sm text-xs font-light py-2 px-4 mt-2 h-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col my-3 relative">
          <label className="text-black/80 font-light text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="............."
            className="bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4 mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <FaEye
              className="absolute bottom-0 mb-3 right-6 text-black/50 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <IoMdEyeOff
              className="absolute bottom-0 mb-3 right-6 text-black/50 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <div className="flex flex-col my-3 relative">
          <label className="text-black/80 font-light text-sm">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="............."
            className="bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4 mt-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showConfirmPassword ? (
            <FaEye
              className="absolute bottom-0 mb-3 right-6 text-black/50 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <IoMdEyeOff
              className="absolute bottom-0 mb-3 right-6 text-black/50 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-lime-600 rounded-md text-white text-sm font-semibold my-3 text-center py-1 w-1/3 h-10"
        >
          Next
        </button>
      </form>

      {showHelp && (
        <div className="fixed bottom-20 right-4 bg-lime-200 text-black rounded-lg shadow-md p-4 w-60">
          <p>This is my drop-up content!</p>
        </div>
      )}

      {showHelp ? (
        <div
          className="bg-lime-600 text-white rounded-full fixed right-4 bottom-4 shadow-lime-500 transition-transform duration-300 hover:scale-110 p-2 text-3xl cursor-pointer "
          onClick={() => setShowHelp(!showHelp)}
        >
          <IoChevronDown />
        </div>
      ) : (
        <div
          className="bg-lime-600 text-white rounded-full fixed right-4 bottom-4 shadow-lime-500 transition-transform duration-300 hover:scale-110 p-2 text-3xl cursor-pointer"
          onClick={() => setShowHelp(!showHelp)}
        >
          <BiSolidMessageRoundedError />
        </div>
      )}

      <button
        type="submit"
        className={`bg-lime-600 rounded-md text-white text-sm font-semibold my-3 text-center py-1 w-1/3 h-10 ${
          loading ? "cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            Loading...
          </div>
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};

export default Signup;
