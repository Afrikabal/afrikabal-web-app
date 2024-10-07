"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import Afrikabal from "@/images/afrikabal.png";
import Image from "next/image";
import HelpDropUp from "@/app/components/reset-password/HelpDropUp";
import { IoChevronDown } from "react-icons/io5";
import { BiSolidMessageRoundedError } from "react-icons/bi";

const Confirm = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const pin1Ref = useRef<HTMLInputElement>(null);
  const pin2Ref = useRef<HTMLInputElement>(null);
  const pin3Ref = useRef<HTMLInputElement>(null);
  const pin4Ref = useRef<HTMLInputElement>(null);

  const handlePinChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    pinIndex: number
  ) => {
    const value = e.target.value;
    if (isNaN(Number(value)) || value.length > 1) return;

    switch (pinIndex) {
      case 1:
        setPin1(value);
        if (value && pin2Ref.current) pin2Ref.current?.focus();
        break;
      case 2:
        setPin2(value);
        if (value && pin3Ref.current) pin3Ref.current?.focus();
        break;
      case 3:
        setPin3(value);
        if (value && pin4Ref.current) pin4Ref.current?.focus();
        break;
      case 4:
        setPin4(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (pin1 && pin2 && pin3 && pin4) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [pin1, pin2, pin3, pin4]);

  const handleSubmit = () => {
    setIsLoading(true);
    setIsDisabled(true);
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

      <div className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12 bg-white rounded-md border border-black/10 shadow-md">
        <div>
          <p className="text-black font-bold text-lg">Confirm with PIN</p>
          <p className="text-black/50 font-light text-xs w-72 my-2 grid grid-cols-2 lg:grid-cols-1">
            Confirm this password change with your 4 digit transaction PIN
          </p>
        </div>

        <div className="flex gap-4 mb-4">
          <input
            ref={pin1Ref}
            type="number"
            placeholder="-"
            value={pin1}
            onChange={(e) => handlePinChange(e, 1)}
            maxLength={1}
            className="w-10 h-10 text-center text-black/80 border rounded bg-white shadow-md"
          />
          <input
            ref={pin2Ref}
            type="number"
            placeholder="-"
            value={pin2}
            onChange={(e) => handlePinChange(e, 2)}
            maxLength={1}
            className="w-10 h-10 text-center text-black/80 border rounded bg-white shadow-md"
          />
          <input
            ref={pin3Ref}
            type="number"
            placeholder="-"
            value={pin3}
            onChange={(e) => handlePinChange(e, 3)}
            maxLength={1}
            className="w-10 h-10 text-center text-black/80 justify-center border rounded bg-white shadow-md"
          />
          <input
            ref={pin4Ref}
            type="number"
            placeholder="-"
            value={pin4}
            onChange={(e) => handlePinChange(e, 4)}
            maxLength={1}
            className="w-10 h-10 text-center text-black/80 border rounded bg-white shadow-md"
          />
        </div>

        <div className="text-xs text-black/50">
          <p>
            Forgot transaction pin? Click{" "}
            <Link href="" className="text-lime-600">
              here
            </Link>
          </p>
        </div>

        <button
          className={`${
            isDisabled ? "bg-lime-200 cursor-not-allowed" : "bg-lime-600 "
          } text-sm rounded-md font-semibold my-4 text-center text-white py-1 w-1/3 h-10`}
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          {isLoading ? "Loading..." : "Reset"}
        </button>
      </div>

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

export default Confirm;
