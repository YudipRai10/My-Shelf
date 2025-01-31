import React from "react";
import logo from "../../../assets/shelf_logo.png";

const Logo = ({
  height,
  width,
  className,
}: {
  height: string;
  width: string;
  className?: string;
}): React.ReactElement => {
  return (
    <img
      src={logo}
      alt="Logo"
      className={`object-contain ${height} ${width} ${className}`}
    />
  );
};

export default Logo;
