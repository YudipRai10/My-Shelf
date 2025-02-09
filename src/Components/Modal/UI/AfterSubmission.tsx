import React, { useContext } from "react";
import tick from "../../../assets/submiitedTick.png";
import { BookContext } from "../../../Context/Context";
import { useLoading } from "../../../CustomHook/useLoading";

export const AfterSubmission: React.FC = () => {
  const { setShowModal } = useContext(BookContext);
  const isLoading = useLoading();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className=" mt-28 mb-28">
            <p className="font-semibold text-2xl">Process Completed</p>
          </div>
          <img src={tick} alt="tick" className="object-contain" />
          <div className="mt-52">
            <button
              onClick={() => setShowModal(false)}
              className="bg-borrow text-white px-14 py-5 rounded-md font-semibold text-xl leading-3"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};
