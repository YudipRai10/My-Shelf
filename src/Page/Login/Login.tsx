import React from "react";
import Logo from "../../Components/ui/logo/Logo";
import LoginHeader from "../../Components/Login/LoginHeader";
import LoginForm from "../../Components/Login/LoginForm";

function Login(): React.ReactElement {
  return (
    <div className="min-h-screen grid place-items-center">
      <div
        className="bg-white rounded-xl sm:pt-16 sm:pr-17 sm:pb-42 sm:pl-18 p-10 shadow-custom w-secondary"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-16">
          <Logo width="w-36" height="h-24" />

          <div className="text-primary w-full">
            <LoginHeader />

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
