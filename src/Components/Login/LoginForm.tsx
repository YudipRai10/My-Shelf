import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../CustomHook/UseForm";
import Button from "../ui/button/Button";

function LoginForm(): React.ReactElement {
  const navigate = useNavigate();

  // useForm Initialize
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    formType: "login",
  });

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        {/* Email */}
        <div className="flex flex-col gap-2 mb-6 relative">
          <label className="text-base leading-4 font-semibold">Email</label>
          <input
            className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
              errors.email ? "border-red-500" : "border-light"
            }`}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="username@collegename.ac.in"
          />
          {errors.email && (
            <p className="text-red-500 text-xs absolute -bottom-4">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-base leading-4 font-semibold">Password</label>
          <input
            className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
              errors.password ? "border-red-500" : "border-light"
            }`}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-xs absolute -bottom-4">
              {errors.password}
            </p>
          )}
        </div>
      </div>

      {/* Remember/Forget */}
      <div className="flex justify-between text-xs sm:text-base leading-4 mb-10">
        <div className="flex gap-2">
          <input type="checkbox" className="cursor-pointer" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <p className="underline cursor-pointer">Forgot password?</p>
      </div>

      <Button variant="submit" type="submit" className="mb-9">
        Login
      </Button>

      {/* Registration */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center text-base leading-4">
        <p>
          New User?{" "}
          <span
            className="underline cursor-pointer"
            onClick={navigateToRegister}
          >
            Register here
          </span>
        </p>
        <p className="cursor-pointer">Use as Guest</p>
      </div>
    </form>
  );
}

export default LoginForm;
