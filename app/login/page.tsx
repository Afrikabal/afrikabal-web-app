"use client";
import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Afrikabal from "@/images/afrikabal.png";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import HelpDropUp from "../components/login/HelpDropUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const isFormValid = isValidEmail && password.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid) {
      setLoading(true);
      setTimeout(() => {
        console.log("Form Submitted");
        setIsSignedIn(true);
        setLoading(false);
      }, 1000);
    } else {
      alert("Please enter a valid email and password.");
    }
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

      {!isSignedIn ? (
        <form
          onSubmit={handleSubmit}
          className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12 bg-white rounded-md border border-black/10 shadow-md"
        >
          <div>
            <p className="text-black font-bold text-lg">Sign In</p>
            <p className="text-black/50 font-light text-xs w-72 my-2 grid grid-cols-2 lg:grid-cols-1">
              Please enter your email and password
            </p>
          </div>

          <div className="flex flex-col my-3 relative">
            <label className="text-black/80 font-light text-sm">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="bg-white/70 text-black/50 shadow-md rounded-sm text-xs font-light py-2 px-4 my-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col my-3 relative">
            <label className="text-black/80 font-light text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="............."
              className="bg-white/70 text-black/50 shadow-md rounded-sm font-light text-xs py-2 px-4 my-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEye
                className="text-black/50 absolute top-9 right-4"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <IoMdEyeOff
                className="text-black/50 absolute top-9 right-4"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <button
            type="submit"
            className={`${
              !isFormValid || loading
                ? "bg-lime-200 cursor-not-allowed"
                : "bg-lime-600 cursor-pointer"
            } rounded-md text-white text-sm font-semibold my-4 text-center py-1 w-1/3 h-10`}
            disabled={!isFormValid || loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      ) : (
        <div className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12 bg-white rounded-md border border-black/10 shadow-lime-600">
          <div className="bg-slate-50 w-auto h-auto p-2 flex justify-between rounded-md cursor-pointer">
            <LuMessageCircle className="text-lime-600 text-3xl mr-4" />
            <div className="text-xs">
              <h5 className="text-lime-600 font-bold">With Code</h5>
              <p className="text-black/50">
                Receive a code via SMS or WhatsApp
              </p>
            </div>
            <FaAngleRight className="text-lime-600 text-3xl ml-4" />
          </div>

          <div className="bg-slate-50 w-auto h-auto p-2 flex justify-between rounded-md mt-4 cursor-pointer">
            <TfiEmail className="text-lime-600 text-2xl text-center mr-4" />
            <div className="text-xs">
              <h5 className="text-lime-600 font-bold">With Email</h5>
              <p className="text-black/50">
                We&apos;ll send a code to your Afrikabal
                <br /> email address
              </p>
            </div>
            <Link href='/login/validate-login'>
              <FaAngleRight className="text-lime-600 text-3xl mt-2 ml-4" />
            </Link>
          </div>
        </div>
      )}

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
