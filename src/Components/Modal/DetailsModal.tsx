import React, { useContext } from "react";
import caret from "../../assets/caret.png";
import { BookContext } from "../../Context/Context";
import { UseDateSelector } from "../../CustomHook/UseDateSelector";
import { UseDateToggle } from "../../CustomHook/UseDateToggle";
import { useBorrowForm } from "../../CustomHook/useBorrowForm";
import { TodayDate } from "./UI/TodayDate";
import { SerialNoInput } from "./UI/SerialNoInput";
import { DesciptionInput } from "./UI/DesciptionInput";
import { AfterSubmission } from "./UI/AfterSubmission";

export const DetailsModal: React.FC = () => {
  const { setShowModal, isBorrow } = useContext(BookContext);

  const {
    selectedDate,
    setSelectedDate,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    filteredDays,
    filteredMonths,
    filteredYears,
  } = UseDateSelector();

  const {
    showDateDropdown,
    setShowDateDropdown,
    showMonthDropdown,
    setShowMonthDropdown,
    showYearDropdown,
    setShowYearDropdown,
    toggleDate,
    toggleMonth,
    toggleYear,
  } = UseDateToggle();

  const initialValues = {
    day: selectedDate,
    month: selectedMonth,
    year: selectedYear,
    serialNo: "",
    purpose: "",
  };

  const { values, errors, setValues, handleChange, handleSubmit, isSubmitted } =
    useBorrowForm({
      initialValues,
    });

  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className="bg-overlay opacity-30 absolute top-0 left-0 right-0 bottom-0"
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white pl-16 pr-14 pt-11 pb-16 rounded-10`}
      >
        <div className="h-[717px] w-[322px]">
          {isSubmitted ? (
            <AfterSubmission />
          ) : (
            <>
              <p className="font-semibold text-xl mb-10">Fill Up the Details</p>

              <form onSubmit={handleSubmit}>
                {/* Today's date */}
                <TodayDate />

                {/* Submission Date */}
                <div className="mb-12">
                  <p className="font-medium text-base mb-6">To</p>

                  <div className="text-primary flex items-center gap-5">
                    {/* Day */}
                    <div
                      className={`${
                        showDateDropdown ? "shadow-xl" : ""
                      } flex gap-6 items-center bg-secondary rounded-md pl-2.5 w-20 py-3 relative cursor-pointer`}
                      onClick={toggleDate}
                    >
                      <p className="font-bold text-base">
                        {String(selectedDate).padStart(2, "0")}
                      </p>
                      <img src={caret} alt="caret" />

                      {showDateDropdown && (
                        <div className="absolute px-1 py-1 z-10 top-11 left-0 bg-white shadow-lg mt-2 rounded-md w-full h-40 overflow-y-auto hide-scrollbar">
                          {filteredDays.map((day) => (
                            <div
                              key={day}
                              className="cursor-pointer py-1 px-3 hover:bg-slate-100"
                              onClick={() => {
                                setSelectedDate(day);
                                setValues((prevValues) => ({
                                  ...prevValues,
                                  day: day,
                                }));
                                setShowDateDropdown(false);
                              }}
                            >
                              {String(day).padStart(2, "0")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Month */}
                    <div
                      className={`${
                        showMonthDropdown ? "shadow-xl" : ""
                      } flex gap-6 items-center bg-secondary rounded-md pl-2.5 w-20 py-3 relative cursor-pointer`}
                      onClick={toggleMonth}
                    >
                      <p className="font-bold text-base">
                        {String(selectedMonth).padStart(2, "0")}
                      </p>
                      <img src={caret} alt="caret" />

                      {showMonthDropdown && (
                        <div className="absolute px-1 py-1 z-10 top-11 left-0 bg-white shadow-lg mt-2 rounded-md w-full h-40 overflow-y-auto hide-scrollbar">
                          {filteredMonths.map((month) => (
                            <div
                              key={month}
                              className="cursor-pointer py-1 px-3 hover:bg-slate-100"
                              onClick={() => {
                                setSelectedMonth(month);
                                setValues((prevValues) => ({
                                  ...prevValues,
                                  month: month,
                                }));
                                setShowMonthDropdown(false);
                              }}
                            >
                              {String(month).padStart(2, "0")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Year */}
                    <div
                      className={`${
                        showYearDropdown ? "shadow-xl" : ""
                      } flex gap-6 items-center bg-secondary rounded-md px-2.5 py-3 relative cursor-pointer`}
                      onClick={toggleYear}
                    >
                      <p className="font-bold text-base">{selectedYear}</p>
                      <img src={caret} alt="caret" />

                      {showYearDropdown && (
                        <div className="absolute px-1 py-1 z-10 top-11 left-0 bg-white shadow-lg mt-2 rounded-md w-full h-40 overflow-y-auto hide-scrollbar">
                          {filteredYears.map((year) => (
                            <div
                              key={year}
                              className="cursor-pointer py-1 px-3 hover:bg-slate-100"
                              onClick={() => {
                                setSelectedYear(year);
                                setValues((prevValues) => ({
                                  ...prevValues,
                                  year: year,
                                }));
                                setShowYearDropdown(false);
                              }}
                            >
                              {year}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Book Serial */}
                <SerialNoInput
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />

                {/* Description */}
                <DesciptionInput
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
                {/* Borrow Button */}
                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    className={`${
                      isBorrow ? "bg-borrow" : "bg-read"
                    } text-white px-14 py-5 rounded-md font-semibold text-xl leading-3`}
                  >
                    {isBorrow ? "Borrow" : "Read"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
