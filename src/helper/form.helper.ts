import { FormErrors } from "../CustomHook/UseForm";

// Validation
interface ValidateProps {
  values: { [key: string]: string };
  formType: "login" | "register";
}

export const validate = ({ values, formType }: ValidateProps) => {
  const errors: FormErrors = {};

  // Validation for login page
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

  // Validation for register page
  if (formType === "register") {
    if (!values.regNo) {
      errors.regNo = "Registration Number is required";
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
      errors.confirmPassword = "Confirmation password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password must match";
    }
  }

  return errors;
};

// HandleChange function
interface FormChangeProps {
  e: React.ChangeEvent<HTMLInputElement>;
  setValues: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

export const FormChange = ({
  e,
  setValues,
  errors,
  setErrors,
}: FormChangeProps) => {
  const { name, value } = e.target;
  setValues((prevValue) => ({ ...prevValue, [name]: value }));

  setErrors({ ...errors, [name]: "" });
};
