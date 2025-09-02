import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  className,
}) => {
  const baseStyles =
    "rounded-lg font-medium focus:outline-none transition-colors duration-200 cursor-pointer tracking-tighter shadow-lg shadow-neutral-400/20 dark:shadow-none";

  const variantStyles: Record<string, string> = {
    primary: "bg-neutral-900 dark:bg-neutral-50 border-[1px] border-neutral-900 dark:border-neutral-50 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:translate-y-[-2px]  transition-transform animate ease-out hover:border-neutral-800 duration-300",
    secondary: "bg-neutral-50 dark:bg-neutral-950 border-[1px] border-neutral-200 dark:border-neutral-800 dark:text-white text-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:translate-y-[-2px]  transition-transform animate ease-out hover:border-neutral-100 dark:hover:border-neutral-800 duration-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;