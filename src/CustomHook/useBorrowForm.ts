import React, { useContext, useState } from "react";
import { FormErrors } from "./UseForm";
import { BookContext } from "../Context/Context";
import { Books } from "../bookdata/book";

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

  const { booksSaved, setBooksSaved } = useContext(BookContext);

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

  const handleSubmit = (e: React.FormEvent, book: Books) => {
    e.preventDefault();

    const validationErrors = validate();
    const bookExist = booksSaved.some((item) => item.id === book.id);

    if (Object.keys(validationErrors).length === 0) {
      if (bookExist) {
        window.alert("Book is already borrowed!");
      } else {
        const combinedData = {
          ...book,
          status: "Borrowed" as "Borrowed",
          location: "Yudip Rai",
          ...values,
        };
        console.log(combinedData);
        setIsSubmitted(true);
        setBooksSaved((prev) => [...prev, combinedData]);
      }
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
