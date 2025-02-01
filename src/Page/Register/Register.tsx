import React from "react";
import Logo from "../../Components/ui/logo/Logo";
import RegisterHeader from "../../Components/Register/RegisterHeader";
import NavigateToLogin from "../../Components/Register/NavigateToLogin";
import RegisterForm from "../../Components/Register/RegisterForm";

function Register(): React.ReactElement {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="bg-white rounded-xl sm:pt-16 sm:px-17 sm:pb-12 p-10 max-w-[70%] shadow-custom  w-secondary"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center items-center gap-14">
          <Logo width="w-36" height="h-24" />

          <div className="text-primary w-full">
            <RegisterHeader />

            <RegisterForm />

            {/* To login page */}
            <NavigateToLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
