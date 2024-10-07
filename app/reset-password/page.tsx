"use client";
import React, { useState} from "react";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import HelpDropUp from "../components/reset-password/HelpDropUp";
import ResetPasswordForm from "../components/reset-password/ResetPasswordForm";

const ResetPassword = () => {
  const [showHelp, setShowHelp] = useState(false);
  return (
  
    <div>
      <ResetPasswordForm />
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

export default ResetPassword;
