import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormChange, validate } from "../helper/form.helper";

export interface FormValues {
  [key: string]: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface UseFormProps {
  initialValues: FormValues;
  formType: "login" | "register";
}

function useForm({ initialValues, formType }: UseFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    FormChange({ e, setValues, errors, setErrors });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate({ values, formType });

    if (Object.keys(validationErrors).length === 0) {
      if (formType === "login") navigate("/home");
      if (formType === "register") navigate("/login");
    } else {
      setErrors(validationErrors);
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
