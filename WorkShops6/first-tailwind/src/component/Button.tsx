import React from "react";

type ButtonVariants = "primary" | "secondary" | "danger" | "outline";
type ButtonSizes = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariants, string> = {
  primary: `
    bg-blue-600 text-white border-blue-600
    hover:bg-blue-700 hover:border-blue-700
    focus:ring-blue-500 disabled:hover:bg-blue-600 
    disabled:hover:border-blue-600
  `,
  secondary: `
    bg-gray-600 text-white border-gray-600
    hover:bg-gray-700 hover:border-gray-700
    focus:ring-gray-500 disabled:hover:bg-gray-600 
    disabled:hover:border-gray-600
  `,
  danger: `
    bg-red-600 text-white border-red-600
    hover:bg-red-700 hover:border-red-700
    focus:ring-red-500 disabled:hover:bg-red-600 
    disabled:hover:border-red-600
  `,
  outline: `
    bg-transparent text-blue-600 border-blue-600
    hover:bg-blue-50 hover:text-white
    focus:ring-blue-500
    disabled:hover:bg-transparent disabled:hover:text-blue-600
    disabled:text-blue-600/60 disabled:border-blue-600/60
  `,
};

const sizeClasses: Record<ButtonSizes, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...rest
}) => {
  const base =
    "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition-all duration-150 ease-in-out border disabled:opacity-60 disabled:cursor-not-allowed";

  const combined = [base, variantClasses[variant], sizeClasses[size], className]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button type="button" className={combined} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
