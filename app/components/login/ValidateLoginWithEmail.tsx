import React, { useState, useRef } from "react";
import { FaMobileAlt } from "react-icons/fa";

const ValidateLoginWithEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(5).fill(null));

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    const isFilled = newOtp.every((digit) => digit !== "");
    setIsButtonEnabled(isFilled);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtp(["", "", "", "", ""]);
      setIsButtonEnabled(false);
      inputRefs.current[0]?.focus();
    }, 2000);
  };

  return (
    <div className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12 bg-white rounded-md border border-black/10 shadow-md">
      <div>
        <FaMobileAlt className="text-lime-600 text-5xl" />
      </div>
      <div className="mt-4">
        <p className="text-black font-bold text-lg">Sign In</p>
        <p className="text-black/50 font-light text-sm w-72 mt-2 grid grid-cols-2 lg:grid-cols-1">
          Please enter the OTP we just sent to
        </p>
        <p className="font-bold text-sm text-black">example@gmail.com</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            className="border border-gray-300 rounded w-10 h-10 text-center text-black/50 text-xl"
            placeholder="-"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
          />
        ))}
      </div>

      <button
        className={`${
          loading
            ? "bg-lime-200 cursor-not-allowed"
            : isButtonEnabled
            ? "bg-lime-600"
            : "bg-lime-200 cursor-not-allowed"
        } rounded-md text-white text-sm font-semibold my-4 text-center py-1 w-auto h-10 lg:w-1/3`}
        disabled={!isButtonEnabled || loading}
        onClick={handleSubmit}
      >
        {loading ? (
          <span>
            Loading
            <span className="animate-blink1">.</span>
            <span className="animate-blink2">.</span>
            <span className="animate-blink3">.</span>
          </span>
        ) : (
          "Reset"
        )}
      </button>
    </div>
  );
};

export default ValidateLoginWithEmail;
