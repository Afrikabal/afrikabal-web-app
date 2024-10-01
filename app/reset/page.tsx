"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Afrikabal from "@/images/afrikabal.png";
import { FaLock } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import HelpDropUp from "../components/reset/HelpDropUp";
import ResetPopUp from "../components/reset/ResetPopUp";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 5000);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    setIsValidEmail(validateEmail(email));
  };

  return (
    <div
      className={`relative ${
        showPopup ? "brightness-75" : "brightness-100"
      } min-h-screen bg-white pt-2 pb-8 h-full md:text-sm font-pacifico`}
    >
      <div className="fixed w-full top-0 left-0 mb-8 shadow-md py-3 z-[100] bg-white">
        <Link href="/landing">
          <Image
            alt="Afrikabal logo"
            className="h-auto mx-6 w-12"
            src={Afrikabal}
            width={60}
            height={60}
          />
        </Link>
      </div>

      <div className="w-auto md:w-1/3 bg-lime-50 mx-12 rounded-md text-xs lg:w-1/3 mt-20">
        <div className="grid grid-cols-1 space-x-8 text-lime-600 relative mx-6 py-2">
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
          <p className="text-black font-bold text-lg">Forgot Password?</p>
          <p className="text-black/50 font-light text-xs px-6 w-72 my-2 grid grid-cols-2 lg:grid-cols-1">
            Please type in the email address linked to your Afrikabal account to
            reset your password.
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
            onChange={handleEmailChange}
          />
        </div>

        <div className="inline text-xs">
          <span className="text-black/50">Remember Password? </span>
          <Link href="/reset" className="text-lime-600">
            Back to Sign-in
          </Link>
        </div>

        <button
          type="submit"
          className={`bg-lime-600 rounded-md text-white text-sm font-semibold my-3 text-center py-1 w-1/3 h-10 ${
            !isValidEmail || loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isValidEmail || loading}
        >
          {loading ? "Loading..." : "Reset"}
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

      {showPopup && <ResetPopUp setShowPopup={setShowPopup} />}
    </div>
  );
};

export default Reset;
