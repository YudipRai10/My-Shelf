import React from "react";
import LoginCheck from "./LoginCheck";
import Button from "../ui/button/Button";
import useForm from "../../CustomHook/UseForm";

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
    { label: "Email", value: "email" },
    { label: "Password", value: "password" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <div>
          {inputData.map((data, index) => (
            <div key={index} className="flex flex-col gap-2 mb-6 relative">
              <label className="text-base leading-4 font-semibold">
                {data.label}
              </label>
              <input
                className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
                  errors[data.value] ? "border-red-500" : "border-light"
                }`}
                type={data.value}
                name={data.value}
                value={values[data.value]}
                onChange={handleChange}
                placeholder={
                  data.value === "email" ? "username@collegename.ac.in" : ""
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs absolute -bottom-4">
                  {errors[data.value]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Remember/Forget */}
      <LoginCheck />

      <Button variant="submit" type="submit" className="mb-9">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
