import React from "react";
import Logo from "../../Components/ui/logo/Logo";
import LoginHeader from "../../Components/Login/LoginHeader";
import LoginForm from "../../Components/Login/LoginForm";
import NavigateToReg from "../../Components/Login/NavigateToReg";

function Login(): React.ReactElement {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="bg-white rounded-xl sm:pt-16 sm:pr-17 2xl:pb-42 sm:pl-18 p-10 shadow-custom max-w-[70%] sm:w-secondary"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center items-center gap-6 2xl:gap-16">
          <Logo width="w-36" height="h-24" />

          <div className="text-primary w-full">
            <LoginHeader />

            <LoginForm />

            {/* Registration */}
            <NavigateToReg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
