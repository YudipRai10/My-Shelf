import React from "react";
import useForm from "../../CustomHook/UseForm";
import Button from "../ui/button/Button";
import FormInput from "../FormInput/FormInput";

function RegisterForm(): React.ReactElement {
  const initialValues = {
    regNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    formType: "register",
  });

  // To map input
  const inputData = [
    { label: "Reg No.", type: "number", value: "regNo" },
    { label: "College Email Id", type: "email", value: "email" },
    { label: "Password", type: "password", value: "password" },
    { label: "Confirm Password", type: "password", value: "confirmPassword" },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 mb-9">
        {inputData.map((data) => (
          <FormInput
            key={data.value}
            label={data.label}
            value={values[data.value]}
            type={data.type}
            name={data.value}
            handleChange={handleChange}
            errors={errors[data.value]}
            placeholder={
              data.type === "number"
                ? "College Reg. No."
                : data.type === "email"
                ? "username@collegename.ac.in"
                : ""
            }
          />
        ))}
      </div>

      <Button variant="submit" type="submit" className="mb-9">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
