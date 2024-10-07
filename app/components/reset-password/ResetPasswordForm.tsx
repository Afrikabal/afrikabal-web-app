import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaEye, FaCheckCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdEyeOff } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Afrikabal from "@/images/afrikabal.png";

const ResetPasswordForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isResetEnabled, setIsResetEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const isPasswordValid = password.length >= 8;
  const containsNumber = /\d/.test(password);
  const doPasswordsMatch =
    password !== "" && confirmPassword !== "" && password === confirmPassword;

  useEffect(() => {
    setIsResetEnabled(isPasswordValid && containsNumber && doPasswordsMatch);
  }, [
    password,
    confirmPassword,
    isPasswordValid,
    containsNumber,
    doPasswordsMatch,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (password === confirmPassword) {
      console.log("Form Submitted");

      await new Promise((resolve) => setTimeout(resolve, 2000));
      await router.push("/reset-password/confirm");
    } else {
      alert("Passwords do not match");
      setLoading(false);
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

      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 grid grid-cols-1 mx-12 mt-8 justify-between left-4 px-6 py-12 bg-white rounded-md border border-black/10 shadow-md"
      >
        <div className="flex flex-col my-3 relative">
          <label className="text-black/80 font-light text-sm">
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="............."
            className="bg-white/70 text-black/50 shadow-md rounded-sm text-sm py-2 px-4 my-2"
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
            type={showConfirmPassword ? "text" : "password"}
            placeholder="............."
            className="bg-white/70 text-black/50 shadow-md rounded-sm text-sm py-2 px-4 my-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showConfirmPassword ? (
            <FaEye
              className="text-black/50 absolute top-10 right-4"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <IoMdEyeOff
              className="text-black/50 absolute top-10 right-4"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>

        <div className="text-xs text-black/50">
          <p className="font-bold text-black">Password must:</p>
          <div className="flex items-center">
            {isPasswordValid ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <CiCircleMinus className="text-red-500" />
            )}
            <span className={`mx-2 ${isPasswordValid ? "text-green-500" : ""}`}>
              Contain at least 8 characters
            </span>
          </div>
          <div className="flex items-center">
            {containsNumber ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <CiCircleMinus className="text-red-500" />
            )}
            <span className={`mx-2 ${containsNumber ? "text-green-500" : ""}`}>
              Contain at least one number
            </span>
          </div>
          <div className="flex items-center">
            {doPasswordsMatch ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <CiCircleMinus className="text-red-500" />
            )}
            <span
              className={`mx-2 ${doPasswordsMatch ? "text-green-500" : ""}`}
            >
              Match with your confirm password
            </span>
          </div>
        </div>

        <button
          type="submit"
          className={`${
            isResetEnabled && !loading
              ? "bg-lime-600"
              : "bg-lime-200 cursor-not-allowed"
          } rounded-md text-white text-sm font-semibold my-4 text-center py-1 w-1/3 h-10`}
          disabled={!isResetEnabled || loading}
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
      </form>
    </div>
  );
};

export default ResetPasswordForm;
