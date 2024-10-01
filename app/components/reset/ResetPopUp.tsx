import React from "react";
import { MdDone } from "react-icons/md";

const ResetPopUp = ({
  setShowPopup,
}: {
  setShowPopup: (value: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-[200] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="bg-lime-600 h-8 w-8 p-2 m-auto text-white flex items-center text-3xl font-bold rounded-md">
          <MdDone />
        </div>
        <p className="text-black/60 text-sm m-2">
          Check your email for a password reset link
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-lime-600 mt-4 rounded-md text-white text-sm font-semibold py-2 px-4"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default ResetPopUp;
