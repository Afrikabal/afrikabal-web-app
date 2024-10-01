"use client";
import React, { useState, useEffect } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Afrikabal from "@/images/afrikabal.png";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import HelpDropUp from "../components/reset-password/HelpDropUp";
import { CiCircleMinus } from "react-icons/ci";

const Login = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isResetEnabled, setIsResetEnabled] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const isPasswordValid = password.length >= 8 && /\d/.test(password);
    const doPasswordsMatch = password === confirmPassword;

    
    setIsResetEnabled(isPasswordValid && doPasswordsMatch);
  }, [password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (password === confirmPassword) {
      console.log("Form Submitted");
    } else {
      alert("Passwords do not match");
    }

    setLoading(false);
  };

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

      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12 bg-white rounded-md border border-black/10 shadow-md"
      >
        <div>
          <p className="text-black font-bold text-lg">Reset Password</p>
          <p className="text-black/50 font-light text-xs w-72 my-2 grid grid-cols-2 lg:grid-cols-1">
            Please enter your new password
          </p>
        </div>

        <div className="flex flex-col my-3 relative">
          <label className="text-black/80 font-light text-sm">
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="............."
            className="bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4 my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <FaEye
              className="text-black/50 absolute top-10 right-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <IoMdEyeOff
              className="text-black/50 absolute top-10 right-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <div className="flex flex-col my-3 relative">
          <label className="text-black/80 font-light text-sm">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="............."
            className="bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4 my-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showPassword ? (
            <FaEye
              className="text-black/50 absolute top-10 right-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <IoMdEyeOff
              className="text-black/50 absolute top-10 right-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <div className="text-xs text-black/50">
          <p className="font-bold text-black">Password must:</p>
          <div className="flex">
            <CiCircleMinus />
            <span className="mx-2">Contain at least 8 characters</span>
          </div>
          <div className="flex">
            <CiCircleMinus />
            <span className="mx-2">Contain at least one number</span>
          </div>
          <div className="flex">
            <CiCircleMinus />
            <span className="mx-2">Match with your confirm password</span>
          </div>
        </div>

        <button
          type="submit"
          className={`${
            isResetEnabled ? "bg-lime-600" : "bg-lime-200 cursor-not-allowed"
          } rounded-md text-white text-sm font-semibold my-4 text-center py-1 w-1/3 h-10`}
          disabled={!isResetEnabled || loading}
        >
          Reset
        </button>
      </form>

      {showHelp && (
        <div className="fixed bottom-16 right-4">
          <HelpDropUp />
        </div>
      )}

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

export default Login;
