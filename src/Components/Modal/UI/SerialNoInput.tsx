import React from "react";
import { ValuesProps } from "../../../CustomHook/useBorrowForm";
import { FormErrors } from "../../../CustomHook/UseForm";

export interface ModalInputsProps {
  values: ValuesProps;
  handleChange: (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
  errors: FormErrors;
}

export const SerialNoInput: React.FC<ModalInputsProps> = ({
  values,
  handleChange,
  errors,
}) => {
  return (
    <div className="relative">
      <p className="text-base font-medium mb-2.5">Book Serial No.</p>
      <div className="border border-lightBorder py-5 pl-5 rounded-10 w-full mb-6">
        <input
          type="text"
          className="border-none outline-none text-base font-medium"
          placeholder="Book ID"
          name="serialNo"
          value={values.serialNo}
          onChange={handleChange}
        />
      </div>
      {errors.serialNo && (
        <p className="text-red-500 text-xs absolute -bottom-4">
          {errors.serialNo}
        </p>
      )}
    </div>
  );
};
