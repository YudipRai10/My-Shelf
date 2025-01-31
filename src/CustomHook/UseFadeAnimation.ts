import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UseFadeAnimation() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  // To make image visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const fadeOut = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    const navigateToLogin = setTimeout(() => {
      navigate("/login");
    }, 2400);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOut);
      clearTimeout(navigateToLogin);
    };
  }, [navigate]);

  return isVisible;
}

export default UseFadeAnimation;
