import React from "react";
import useForm from "../../CustomHook/UseForm";
import Button from "../ui/button/Button";

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
        {inputData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 relative">
            <label className="text-base leading-4 font-semibold">
              {data.label}
            </label>
            <input
              className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
                errors[data.value] ? "border-red-500" : "border-light"
              }`}
              type={data.type}
              name={data.value}
              value={values[data.value]}
              onChange={handleChange}
              placeholder={
                data.type === "number"
                  ? "College Reg. No."
                  : data.type === "email"
                  ? "username@collegename.ac.in"
                  : ""
              }
            />
            {errors.regNo && (
              <p className="text-red-500 text-xs absolute -bottom-4">
                {errors[data.value]}
              </p>
            )}
          </div>
        ))}
      </div>

      <Button variant="submit" type="submit" className="mb-9">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
