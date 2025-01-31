import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

interface UseFormProps {
  initialValues: FormValues;
  formType: "login" | "register";
}

function useForm({ initialValues, formType }: UseFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const validate = (values: FormValues) => {
    const errors: FormErrors = {};

    // Login validation
    if (formType === "login") {
      if (!values.email || values.email.trim() === "") {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }
    }

    // Register validation
    if (formType === "register") {
      if (!values.regNo) {
        errors.regNo = "Registration number is required";
      }

      if (!values.email || values.email.trim() === "") {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Password is required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
      }
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear the error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
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
