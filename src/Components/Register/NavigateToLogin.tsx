import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateToLogin(): React.ReactElement {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-between text-base leading-4">
      <p>
        Already a User?{" "}
        <span className="underline cursor-pointer" onClick={navigateToLogin}>
          Login now
        </span>
      </p>
      <p className="cursor-pointer">Use as Guest</p>
    </div>
  );
}

export default NavigateToLogin;
