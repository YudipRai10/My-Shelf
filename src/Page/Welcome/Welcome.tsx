import React from "react";
import Logo from "../../Components/ui/logo/Logo";
import UseFadeAnimation from "../../CustomHook/UseFadeAnimation";

function Welcome(): React.ReactElement {
  // Custom Hook for Animation
  const isVisible = UseFadeAnimation();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo
        height="h-36"
        width="w-64"
        className={`transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default Welcome;
