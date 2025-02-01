import React from "react";

function LoginCheck(): React.ReactElement {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between text-xs sm:text-base leading-4 mb-10">
      <div className="flex gap-2">
        <input type="checkbox" className="cursor-pointer" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <p className="underline cursor-pointer">Forgot password?</p>
    </div>
  );
}

export default LoginCheck;
