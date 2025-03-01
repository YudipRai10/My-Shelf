import React from "react";

function LoginHeader(): React.ReactElement {
  return (
    <div className="text-center mb-11">
      <p className="text-sm sm:text-xl">Welcome Back !</p>
      <p className="text-xs sm:text-sm mt-4 text-small">
        Sign in to continue to your Digital Library
      </p>
    </div>
  );
}

export default LoginHeader;
