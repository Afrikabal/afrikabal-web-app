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
import HelpDropUp from "../components/login/HelpDropUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  

  return (
    <div className="bg-white min-h-screen scroll-mx-0 pt-2 pb-8 h-full md:text-sm font-pacifico">
      <div className="flex justify-between fixed top-0 left 0 shadow-md w-full h-16 px-6 py-2 bg-white z-[100]">
        <Link href="/landing">
          <Image alt="Afrikabal logo" src={Afrikabal} width={60} height={60} />
        </Link>
        <Link href="/signup">
          <button className="bg-lime-100 h-10 rounded-lg text-xs p-2 mr-5 text-lime-600 font-bold transition-transform duration-300 hover:-translate-y-0.5">
            Create an account
          </button>
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
        <div>
          <p className="text-black font-bold text-lg">Sign in to Afrikabal</p>
          <p className="text-black/50 font-light text-xs px-6 w-72 my-2 grid grid-cols-2 lg:grid-cols-1">
            To sign in, please type in the email address linked to your
            Afrikabal account.
          </p>
        </div>

        <div className="flex flex-col my-3">
          <label className="text-black/80 font-light text-sm">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-white/70 text-black/80 shadow-md rounded-sm text-xs font-light py-2 px-4 my-2 h-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col my-3 relative">
          <label className="text-black/80 font-light text-sm">Password</label>
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
        <div className="inline text-xs">
          <span className="text-black/50">Forgot password? </span>
          <Link href="/reset" className="text-lime-600">
            Reset it
          </Link>
        </div>

        <Link
          href={"/spendAcc"}
          className="bg-lime-600 rounded-md text-white text-sm font-semibold my-3 text-center py-1 w-1/3 h-10"
        >
          Sign in
        </Link>
        <div className="text-xs text-black/50">
          If you don&apos;t have a Afrikabal account, download the app{" "}
          <Link href="https://bit.ly/getAfrikabal" className="text-lime-600">
            here
          </Link>{" "}
          and open an account in a few minutes.
        </div>
      </form>
      {showHelp && (
        <div className="fixed bottom-16 right-4">
          <HelpDropUp/>
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

