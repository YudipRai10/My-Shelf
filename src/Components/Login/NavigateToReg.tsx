import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateToReg(): React.ReactElement {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center text-xs sm:text-base sm:leading-4">
      <p>
        New User?{" "}
        <span className="underline cursor-pointer" onClick={navigateToRegister}>
          Register here
        </span>
      </p>
      <p className="cursor-pointer">Use as Guest</p>
    </div>
  );
}

export default NavigateToReg;
