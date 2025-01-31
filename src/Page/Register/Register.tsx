import React from "react";
import Logo from "../../Components/ui/logo/Logo";
import Button from "../../Components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import useForm from "../../CustomHook/UseForm";

function Register(): React.ReactElement {
  const navigate = useNavigate();
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

  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen grid place-items-center">
      <div
        className="bg-white rounded-xl sm:pt-16 sm:px-17 sm:pb-12 p-10 shadow-custom w-secondary"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center items-center gap-14">
          <Logo width="w-36" height="h-24" />

          <div className="text-primary w-full">
            <div className="text-center mb-8">
              <p className="text-xl">Registration </p>
              <p className="text-sm mt-4 text-small">
                For Both Staff & Students
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 mb-9">
                <div className="flex flex-col gap-2 relative">
                  <label className="text-base leading-4 font-semibold">
                    Reg No.
                  </label>
                  <input
                    className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
                      errors.regNo ? "border-red-500" : "border-light"
                    }`}
                    type="number"
                    name="regNo"
                    value={values.regNo}
                    onChange={handleChange}
                    placeholder="College Reg. No."
                  />
                  {errors.regNo && (
                    <p className="text-red-500 text-xs absolute -bottom-4">
                      {errors.regNo}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-base leading-4 font-semibold">
                    College Email Id
                  </label>
                  <input
                    className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
                      errors.email ? "border-red-500" : "border-light"
                    }`}
                    type="email"
                    placeholder="username@collegename.ac.in"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs absolute -bottom-4">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-base leading-4 font-semibold">
                    Password
                  </label>
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

                <div className="flex flex-col gap-2 relative">
                  <label className="text-base leading-4 font-semibold">
                    Confirm Password
                  </label>
                  <input
                    className={`text-base p-1 sm:p-4 outline-none border rounded-lg ${
                      errors.confirmPassword ? "border-red-500" : "border-light"
                    }`}
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs absolute -bottom-4">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <Button variant="submit" type="submit" className="mb-9">
                Register
              </Button>

              <div className="flex justify-between text-base leading-4">
                <p>
                  Already a User?{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={navigateToLogin}
                  >
                    Login now
                  </span>
                </p>
                <p className="cursor-pointer">Use as Guest</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
