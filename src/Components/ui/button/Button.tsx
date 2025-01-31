import React from "react";

const variants = {
  submit:
    "bg-button w-full rounded-lg py-4 text-white font-semibold text-base leading-4",
};

type ButtonVariant = keyof typeof variants;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "submit",
  children,
  className,
  ...props
}) => {
  // Combine the class from the variant with any additional custom className
  const buttonClass = `${variants[variant]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
