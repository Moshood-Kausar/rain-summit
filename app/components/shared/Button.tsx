'use client'
import { LoadingIndicator } from "@/app/assets/svg";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "primary" | "white" | "dark" | "light";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  onClick?: () => void;
  onBlur?: () => void;
  loading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth = false,
  href,
  variant = "outlined",
  type = "button",
  ariaLabel,
  onClick,
  onBlur,
  loading = false,
}) => {
  const variantStyles = {
    text: "border-none outline-transparent focus:outline-black border-transparent bg-transparent",
    primary:
      "outline-transparent focus:outline-black hover:scale-90 active-scale-100 disabled:border-disabled bg-gold-gradient disabled:bg-disabled disabled:cursor-not-allowed text-[#1D1D1D]",
    white:
      "border outline-transparent focus:outline-black border-primary hover:border-primary/80 disabled:border-disabled bg-white disabled:bg-disabled disabled:cursor-not-allowed text-primary",
    dark: "border outline-transparent focus:outline-black border-dark hover:border-dark/80 disabled:border-disabled bg-dark disabled:bg-disabled disabled:cursor-not-allowed text-white",
    outlined:
      "border-[1.6px] outline-transparent focus:outline-primary border-[#4C4E1C] hover:scale-90 active-scale-100 text-[#4C4E1C] bg-hero",
    light: "bg-primary/10 text-primary hover:scale-90 active-scale-100 disabled:cursor-not-allowed"
  };
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      className={`${className} ${fullWidth ? "w-full" : "w-fit"} ${href? "": "px-[1.125rem] py-3 gap-2 min-h-[50px]"} ${
        variantStyles[variant]
      } rounded-lg transition-all flex justify-center items-center`}
    >
      {href ? (
        <Link href={href} target={variant === 'primary' ? "_blank": "_parent"} className="py-3 gap-2 min-h-[50px] px-[1.125rem]">{loading ? <LoadingIndicator /> : children}</Link>
      ) : (
        <>{loading ? <LoadingIndicator /> : children}</>
      )}
    </button>
  );
};
