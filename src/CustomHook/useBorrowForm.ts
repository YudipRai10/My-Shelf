import React, { useState } from "react";
import { FormErrors } from "./UseForm";

export interface ValuesProps {
  day: number;
  month: number;
  year: number;
  serialNo: string;
  purpose: string;
}

interface BorrowProps {
  initialValues: ValuesProps;
}

export const useBorrowForm = ({ initialValues }: BorrowProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const errors: FormErrors = {};

    if (!values.serialNo) {
      errors.serialNo = "Enter Serial Number";
    }

    if (!values.purpose) {
      errors.purpose = "Enter required description";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    values,
    errors,
    setValues,
    handleChange,
    handleSubmit,
    isSubmitted,
    setIsSubmitted,
  };
};
