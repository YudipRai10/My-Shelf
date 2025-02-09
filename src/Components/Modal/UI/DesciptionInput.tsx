import React from "react";
import { ModalInputsProps } from "./SerialNoInput";

export const DesciptionInput: React.FC<ModalInputsProps> = ({
  values,
  handleChange,
  errors,
}) => {
  return (
    <div className="relative">
      <p className="text-base font-medium mb-2.5">Description</p>
      <textarea
        name="purpose"
        id="purpose"
        placeholder="Purpose"
        value={values.purpose}
        onChange={handleChange}
        className="border border-lightBorder outline-none rounded-10  pl-2 pt-2 w-80 h-28"
      ></textarea>
      {errors.purpose && (
        <p className="text-red-500 text-xs absolute -bottom-3">
          {errors.purpose}
        </p>
      )}
    </div>
  );
};
