import React from "react";

interface FormInputProps {
  key: string;
  extraClass?: string;
  label: string;
  value: string;
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errors?: string;
}

function FormInput({
  key,
  extraClass,
  label,
  value,
  type,
  name,
  handleChange,
  placeholder,
  errors,
}: FormInputProps): React.ReactElement {
  return (
    <div key={key} className={`flex flex-col gap-2 relative ${extraClass}`}>
      <label className="text-base leading-4 font-semibold">{label}</label>
      <input
        className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
          errors ? "border-red-500" : "border-light"
        }`}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {errors && (
        <p className="text-red-500 text-xs absolute -bottom-4">{errors}</p>
      )}
    </div>
  );
}

export default FormInput;
