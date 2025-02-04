import React from "react";
import LoginCheck from "./LoginCheck";
import Button from "../ui/button/Button";
import useForm from "../../CustomHook/UseForm";
import FormInput from "../ui/forminput/FormInput";

function LoginForm(): React.ReactElement {
  // useForm Initialize
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    formType: "login",
  });

  // To map input
  const inputData = [
    { label: "Email", type: "email", value: "email" },
    { label: "Password", type: "password", value: "password" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <div>
          {inputData.map((data) => (
            <FormInput
              key={data.value}
              extraClass="mb-6"
              label={data.label}
              value={values[data.value]}
              type={data.type}
              name={data.value}
              handleChange={handleChange}
              errors={errors[data.value]}
              placeholder={
                data.type === "email" ? "username@collegename.ac.in" : ""
              }
            />
          ))}
        </div>
      </div>

      {/* Remember/Forget */}
      <LoginCheck />

      <Button
        type="submit"
        className="bg-button w-full rounded-lg py-4 text-white font-semibold text-base leading-4 mb-9"
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
